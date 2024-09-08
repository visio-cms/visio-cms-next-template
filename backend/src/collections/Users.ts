import { CollectionConfig } from 'payload/types'

const AminUsersCollection: CollectionConfig = {
  slug: 'admin_users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default AminUsersCollection
