import { NextResponse } from 'next/server';
import { createApplication, initializeDatabase } from '../../../../lib/db.js';

// Initialize database on first request
let dbInitialized = false;

async function ensureDbInitialized() {
  if (!dbInitialized) {
    await initializeDatabase();
    dbInitialized = true;
  }
}

export async function POST(request) {
  try {
    // Ensure database is initialized
    await ensureDbInitialized();
    
    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'fullName', 'email', 'phone', 'dateOfBirth', 'gender', 'course',
      'educationLevel', 'address', 'city', 'emergencyContactName',
      'emergencyContactPhone', 'emergencyContactRelationship'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }
    
    // Validate phone format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{1,14}$/;
    if (!phoneRegex.test(body.phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid phone number format' 
        },
        { status: 400 }
      );
    }
    
    // Create application in database
    const result = await createApplication(body);
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Application submitted successfully!',
        applicationId: result.data.id,
        submittedAt: result.data.created_at
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to save application. Please try again.' 
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // This endpoint could be used for admin purposes
    // For now, return a simple status
    return NextResponse.json({
      success: true,
      message: 'Applications API is running',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}