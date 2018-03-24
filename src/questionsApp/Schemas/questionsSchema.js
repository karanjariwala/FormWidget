import { schema } from 'normalizr';

const questionSchema = new schema.Entity(
  'questions',
  {},
  { idAttribute: 'id' }
);

export default questionSchema;
