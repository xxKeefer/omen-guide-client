/**
 * To specify more roles, add more specific string unions to the Roles type.
 * Note: role names must be lowercase.
 *
 * To add more pages, add PageName:Roles[] to the KeyChain interface. And add
 * PageName:['array', 'of', 'roles] to the exported GateKeys object
 */

type Roles = 'public' | 'authenticated' | 'moderator'

interface KeyChain {
  rules: Roles[]
  omen: Roles[]
  // example: Roles[]
}

const GateKeys: KeyChain = {
  rules: ['authenticated', 'moderator'],
  omen: ['authenticated', 'moderator']
}

export default GateKeys
