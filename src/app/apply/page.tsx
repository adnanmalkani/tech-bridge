'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BackToHome from '@/components/BackToHome';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    course: '',
    educationLevel: '',
    previousExperience: '',
    motivation: '',
    address: '',
    city: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit application. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass rounded-3xl p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">✓</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-gray-600 mb-8">
                Thank you for applying to Tech Bridge Pakistan. Our admissions team will review your application and contact you within 2-3 business days.
              </p>
              <div className="space-y-4 text-left bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800">Next Steps:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Check your email for confirmation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Prepare for the entrance assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Await our call for interview scheduling</span>
                  </li>
                </ul>
              </div>
              <Button 
                onClick={() => window.location.href = '/'}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <BackToHome />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Apply to <span className="gradient-text">Tech Bridge Pakistan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards transforming your career with our comprehensive digital skills training programs.
            </p>
          </div>

          {/* Application Form */}
          <div className="glass rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Education Level *</label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your education level</option>
                      <option value="matriculation">Matriculation</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                  Course Selection
                </h2>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Course *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your preferred course</option>
                    <option value="graphics-design">Graphics Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="full-stack">Full Stack Development</option>
                  </select>
                </div>
              </div>

              {/* Background Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                  Background Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Previous Experience</label>
                    <textarea
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tell us about any relevant experience you have in technology, design, or digital marketing..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Why do you want to join Tech Bridge Pakistan? *</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Share your motivation and career goals..."
                    />
                  </div>

                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                  Address & Emergency Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Complete Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your complete address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Emergency Contact Name *</label>
                    <input
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Emergency contact person"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Emergency Contact Phone *</label>
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Relationship to Emergency Contact *</label>
                    <input
                      type="text"
                      name="emergencyContactRelationship"
                      value={formData.emergencyContactRelationship}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="e.g., Father, Mother, Spouse, Sibling"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
                <p className="text-gray-500 text-sm mt-4">
                  By submitting this form, you agree to our terms and conditions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;