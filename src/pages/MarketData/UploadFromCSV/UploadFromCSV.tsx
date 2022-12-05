import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaCalendar } from 'react-icons/fa';
import { Button } from '../../../components/Button';
import { Dropdown, Input } from '../../../components/Form';
import Chips from '../../../components/Form/Chips';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './style.scss';
const UploadFromCSV = () => {
  return (
    <Wrapper>
      <div className='upload-from-csv'>
        <div className='upload-from-csv__content'>
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
                <span>Choose File</span>
              </label>
            </div>
            <div className='col right'>
              <Button
                title='Upload file'
                variant='primary'
              />
              <Chips value='EUR_USD_2022_10.csv' />

              <div className='add-more'>
                <AiOutlinePlus />
              </div>
            </div>
          </main>
          <main className='row'>
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
          </main>
          <main className='row'>
            <div className='action-box'>
              <Button
                title='Ingest Data'
                variant='outlined'
              />
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default UploadFromCSV;
