import { FaCalendar } from 'react-icons/fa';
import { Dropdown, Input } from '../../../components/Form';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './style.scss';
const DownloadToCSV = () => {
  return (
    <Wrapper>
      <div className='download-to-csv'>
        <div className='download-to-csv-content'>
          <div className='row'>
            <Dropdown
              label='Source'
              id='source'
            />
            <Dropdown
              label='Markets'
              id='markets'
            />
            <Dropdown
              label='Type of Data'
              id='type-of-data'
            />
          </div>
          <div className='row'></div>
          <div className='row'>
            <Input
              type='date'
              label='From'
              Icon={<FaCalendar />}
            />
            <Input
              type='date'
              label='To'
              Icon={<FaCalendar />}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DownloadToCSV;
