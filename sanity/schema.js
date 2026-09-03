import { batchYear } from './schemas/batchYear'
import { domain } from './schemas/domain'
import { teamMember } from './schemas/teamMember'
import { event } from './schemas/event'

export const schema = {
  types: [batchYear, domain, teamMember, event],
}
