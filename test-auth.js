const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ezviovidelxmrylzawmn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dmlvdmlkZWx4bXJ5bHphd21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2ODQyNzUsImV4cCI6MjA5NjI2MDI3NX0.HqqWPEsITae_DMKpnTRrxXh6JY_pdKR7Tq8f3nR7RPU';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Testing OTP to +918777354766...');
  const { data, error } = await supabase.auth.signInWithOtp({
    phone: '+918777354766',
  });
  
  if (error) {
    console.error('SUPABASE ERROR:', error.message);
  } else {
    console.log('SUPABASE SUCCESS. Data:', data);
  }
}

test();
