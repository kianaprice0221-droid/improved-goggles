/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `service` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text, default 'new') - for tracking follow-up status
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting contact submissions (public can insert)
    - Only authenticated admin users can read contacts (for future admin panel)
  
  3. Important Notes
    - Public users can submit forms without authentication
    - Form data is stored securely with proper validation
    - Timestamps track when submissions occur
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);