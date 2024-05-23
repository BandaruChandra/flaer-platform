import Select from 'react-select';
import { CUSTOM_STYLES } from '../../helpers/enums';

function DropDown({
  value,
  setValue,
  heading,
  options,
  customStyles = CUSTOM_STYLES,
  clearable,
}) {
  return (
    <div className='max-w-fit'>
      {/* <p className='lg:mb-1 text-sm text-gray-500 lg:text-base capitalize font-medium '>
        {heading}
      </p> */}
      <div className='w-40 sm:w-56 md:w-64 capitalize'>
        <Select
          isClearable={clearable}
          isSearchable={false}
          instanceId={'heading'}
          options={options}
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: '#2A254B',
            },
          })}
          value={value}
          onChange={(e) => {
            setValue(e);
          }}
          placeholder={value}
        />
      </div>
    </div>
  );
}

export default DropDown;
