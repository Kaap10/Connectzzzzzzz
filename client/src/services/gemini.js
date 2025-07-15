// Gemini API integration utility
// Replace GEMINI_API_KEY with your real key for production

const GEMINI_API_KEY = 'FAKE-GEMINI-API-KEY';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export async function generatePost(prompt) {
  const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  const data = await res.json();
  return data;
}

export async function matchProfiles(userProfile, allProfiles) {
  // Example: send user profile and all profiles to Gemini for matching
  const prompt = `Given this user profile: ${JSON.stringify(userProfile)}, and these profiles: ${JSON.stringify(allProfiles)}, suggest the best matches.`;
  const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  const data = await res.json();
  return data;
} 