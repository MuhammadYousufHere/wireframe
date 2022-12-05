import { Dropdown, Input } from '../../components/Form';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { RiNumber1 } from 'react-icons/ri';
import { Button } from '../../components/Button';

import './style.scss';
import Wrapper from '../../components/Wrapper/Wrapper';
const BackTesting = () => {
  return (
    <Wrapper>
      <div className='backtesting'>
        <div className='backtesting__content'>
          <div className='row'>
            <Dropdown
              label='Trading Strategy'
              id='trading-strategy'
            />
            <Dropdown
              label='Data Source'
              id='data-source'
            />
            <Dropdown
              label='Market'
              id='market'
            />
            <Dropdown
              label='Timeframe'
              id='timeframe'
            />
            <Input
              type='date'
              Icon={<AiOutlineCalendar />}
              label='From'
            />
            <Input
              type='date'
              Icon={<AiOutlineCalendar />}
              label='To'
            />
          </div>
          <div className='row'>
            <h2>Backtesting Settings</h2>
            <Input
              label='Cash'
              type='text'
              placeholder='1,000,000'
              Icon={<BiDollar />}
            />
            <Input
              label='Leverage'
              type='text'
              placeholder='50'
              Icon={<RiNumber1 />}
            />
            <Input
              label='Slipage'
              placeholder='-5'
              type='text'
              Icon={<h6>Pips</h6>}
            />
            <Input
              label='Spread'
              type='text'
              placeholder='10'
              Icon={<h6>Pips</h6>}
            />
            <Input
              label='Commission'
              placeholder='2'
              type='text'
              Icon={<AiOutlinePercentage />}
            />
          </div>
          <div className='row'>
            <h2>Strategy 001A Settings</h2>

            <Input
              type='text'
              label='EMA'
              placeholder='200'
            />
            <Input
              type='text'
              label='ATR'
              placeholder='14'
            />
            <Input
              type='text'
              label='ADX'
              placeholder='14'
            />
            <Input
              type='text'
              label='ADX threshold'
              placeholder='14'
            />
            <Input
              type='text'
              Icon={<AiOutlinePercentage />}
              label='Risk size'
              placeholder='2'
            />
          </div>
          <div className='row'>
            <div className='action-box'>
              <Button
                title='Run Strategy'
                variant='outlined'
              />
              <Button
                title='Download CSV'
                withIcon
                variant='outlined'
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BackTesting;
