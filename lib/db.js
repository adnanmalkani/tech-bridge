import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// Initialize database tables
export async function initializeDatabase() {
  try {
    // Create applications table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        date_of_birth DATE NOT NULL,
        gender VARCHAR(10) NOT NULL,
        course VARCHAR(100) NOT NULL,
        education_level VARCHAR(100) NOT NULL,
        previous_experience TEXT,
        motivation TEXT,
        address TEXT NOT NULL,
        city VARCHAR(100) NOT NULL,
        emergency_contact_name VARCHAR(255) NOT NULL,
        emergency_contact_phone VARCHAR(20) NOT NULL,
        emergency_contact_relationship VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('Database tables initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('Error initializing database:', error);
    return { success: false, error: error.message };
  }
}

// Insert new application
export async function createApplication(applicationData) {
  try {
    const result = await sql`
      INSERT INTO applications (
        full_name, email, phone, date_of_birth, gender, course,
        education_level, previous_experience, motivation, address,
        city, emergency_contact_name, emergency_contact_phone,
        emergency_contact_relationship
      ) VALUES (
        ${applicationData.fullName},
        ${applicationData.email},
        ${applicationData.phone},
        ${applicationData.dateOfBirth},
        ${applicationData.gender},
        ${applicationData.course},
        ${applicationData.educationLevel},
        ${applicationData.previousExperience || ''},
        ${applicationData.motivation || ''},
        ${applicationData.address},
        ${applicationData.city},
        ${applicationData.emergencyContactName},
        ${applicationData.emergencyContactPhone},
        ${applicationData.emergencyContactRelationship}
      )
      RETURNING id, created_at
    `;
    
    return { success: true, data: result[0] };
  } catch (error) {
    console.error('Error creating application:', error);
    return { success: false, error: error.message };
  }
}

// Get all applications (for admin purposes)
export async function getAllApplications() {
  try {
    const result = await sql`
      SELECT * FROM applications 
      ORDER BY created_at DESC
    `;
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Error fetching applications:', error);
    return { success: false, error: error.message };
  }
}

// Get application by ID
export async function getApplicationById(id) {
  try {
    const result = await sql`
      SELECT * FROM applications 
      WHERE id = ${id}
    `;
    
    return { success: true, data: result[0] || null };
  } catch (error) {
    console.error('Error fetching application:', error);
    return { success: false, error: error.message };
  }
}

export { sql };