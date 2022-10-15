import { Button, Item } from './Contact.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { Box } from '../Box';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Box display="flex" alignItems="center">
        <BsFillPersonFill />
        {`${name}: ${number}`}
      </Box>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
