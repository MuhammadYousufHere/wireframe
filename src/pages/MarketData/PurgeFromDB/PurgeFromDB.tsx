import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../../components/Button';
import { Dropdown } from '../../../components/Form';
import Chips from '../../../components/Form/Chips';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './style.scss';
const PurgeFromDB = () => {
  return (
    <Wrapper>
      <div className='purge-from-db'>
        <div className='purge-from-db__content'>
          <main className='row'>
            <Dropdown
              id='broker'
              label='Broker'
            />
            <Dropdown
              id='market'
              label='Market'
            />
          </main>
          <main className='row middle'>
            <div className='col left'>
              <label htmlFor=''>
                <span>Pick data</span>
              </label>
            </div>
            <div className='col right'>
              <Chips value='Nov 2021' />
              <Chips value='Dec 2021' />
              <Chips value='May 2022' />
              <div className='add-more'>
                <AiOutlinePlus />
              </div>
            </div>
          </main>
          <main className='row'>
            <div className='action-box'>
              <Button
                title='Purge Data'
                variant='outlined'
              />
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default PurgeFromDB;
