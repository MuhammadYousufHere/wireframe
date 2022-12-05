import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../../components/Button';
import { Dropdown } from '../../../components/Form';
import Chips from '../../../components/Form/Chips';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './style.scss';
const CovertToNew = () => {
  return (
    <Wrapper>
      <div className='convert-to-new-timeframe'>
        <div className='convert-to-new-timeframe__content'>
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
                <span>Time Frame</span>
              </label>
            </div>
            <div className='col right'>
              <Chips value='30m' />
              <Chips value='2H' />
              <Chips value='W' />
              <div className='add-more'>
                <AiOutlinePlus />
              </div>
            </div>
          </main>
          <main className='row'>
            <div className='action-box'>
              <Button
                title='Convert'
                variant='outlined'
              />
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};
export default CovertToNew;
