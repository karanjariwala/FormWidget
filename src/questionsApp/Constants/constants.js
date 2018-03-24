import TextInput from '../Components/presentational/TextInput';
import DateInput from '../Components/presentational/Date';
import BooleanInput from '../Components/presentational/Boolean';
import NumberInput from '../Components/presentational/Number';

export const mapTypeToComponent = {
  string: TextInput,
  date: DateInput,
  boolean: BooleanInput,
  number: NumberInput,
};
