'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { Database } from '@/types/supabase'

type OrgCompliance = Database['public']['Tables']['organisation_compliance']['Row']
type Organisation = Database['public']['Tables']['organisations']['Row']

export default function CompliancePage() {
  const [loading, setLoading] = useState(true)
  const [compliance, setCompliance] = useState<OrgCompliance | null>(null)
  const [organisation, setOrganisation] = useState<Organisation | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser()

      if (userError) {
        setError('Failed to get user.')
        setLoading(false)
        return
      }

      if (!user) {
        setError('Not logged in.')
        setLoading(false)
        return
      }

      const { data: userRole, error: roleError } = await supabase
        .from('user_roles')
        .select('organisation_id')
        .eq('user_id', user.id)
        .single()

      if (roleError || !userRole) {
        setError('No organisation role found.')
        setLoading(false)
        return
      }

      const orgId = userRole.organisation_id

      const { data: orgData, error: orgError } = await supabase
        .from('organisations')
        .select('*')
        .eq('id', orgId)
        .single()

      const { data: complianceData, error: complianceError } = await supabase
        .from('organisation_compliance')
        .select('*')
        .eq('organisation_id', orgId)
        .single()

      if (orgError || complianceError) {
        setError('Error loading compliance data.')
        setLoading(false)
        return
      }

      setOrganisation(orgData)
      setCompliance(complianceData)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <p className="p-4">Loading compliance data...</p>
  if (error) return <p className="p-4 text-red-500">{error}</p>
  if (!compliance || !organisation) return <p className="p-4">No compliance data found.</p>

  const statusColor = {
    compliant: 'text-green-600',
    'at-risk': 'text-yellow-600',
    'non-compliant': 'text-red-600'
  }[compliance.compliance_status || 'non-compliant']

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Organisation Compliance</h1>

      <div className="mb-4">
        <p><strong>Organisation:</strong> {organisation.name}</p>
        <p><strong>State:</strong> {organisation.primary_business_state}</p>
        <p><strong>ABN:</strong> {organisation.abn}</p>
      </div>

      <div className="border rounded p-4 bg-white shadow">
        <p className={`text-lg font-bold ${statusColor}`}>
          Compliance Status: {compliance.compliance_status}
        </p>
        <p><strong>Supervising Tech ID:</strong> {compliance.supervising_technician_id || 'Not set'}</p>
        <p><strong>Insurance Expiry:</strong> {compliance.insurance_expiry_date || 'Not set'}</p>
        <p><strong>Business License Expiry:</strong> {compliance.business_license_expiry_date || 'Not set'}</p>
        <p><strong>Last Audit:</strong> {compliance.last_audit_date || 'Never'}</p>
      </div>
    </div>
  )
}
