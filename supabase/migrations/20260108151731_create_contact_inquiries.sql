/*
  # Create contact inquiries table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address for follow-up
      - `phone` (text, optional) - Phone number if provided
      - `service` (text) - Type of service they're interested in
      - `message` (text) - Detailed message from the contact
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      - `status` (text) - Status of the inquiry (new, contacted, completed)
  
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to create inquiries
    - Add policy for authenticated admin users to view all inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiry status"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
