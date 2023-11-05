const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const url = "https://npgnuzxbhcqoawlztorp.supabase.co"

const supabase = createClient(url, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZ251enhiaGNxb2F3bHp0b3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MjIzMDAsImV4cCI6MjAxMzk5ODMwMH0.mU1IbZVdFsvDTGwPD25mrci7guzxWy582ASOAmONBi8);

module.exports = supabase;
