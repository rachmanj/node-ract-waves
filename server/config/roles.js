const AccessControl = require('accesscontrol');

const allRights = {
  'create:any': ['*'],
  'read:any': ['*'],
  'update:any': ['*'],
  'delete:any': ['*'],
};

let grantsObject = {
  admin: {
    profile: allRights,
    brand: allRights,
    product: allRights,
    site: allRights,
  },
  user: {
    profile: {
      'read:own': ['*', '!password', '!_id'],
      'update:own': ['*', '!password', '!_id'],
    },
    brand: { 'read:any': ['*'] },
    product: { 'read:any': ['*'] },
    site: { 'read:any': ['*'] },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
