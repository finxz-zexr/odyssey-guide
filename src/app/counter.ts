'use client'

// Mock data for local development
let viewCount = 0;
const accessLogs = [];

// Function to increment count and log access
export async function incrementAndLog() {
  // Increment the view count
  viewCount += 1;
  
  // Add a new access log entry with current timestamp
  const newLog = {
    accessed_at: new Date().toISOString()
  };
  
  // Add to the beginning of the array and keep only the most recent 5
  accessLogs.unshift(newLog);
  while (accessLogs.length > 5) {
    accessLogs.pop();
  }

  return {
    count: viewCount,
    recentAccess: [...accessLogs]
  };
}

// Function to get current stats
export async function getStats() {
  return {
    count: viewCount,
    recentAccess: [...accessLogs]
  };
}
