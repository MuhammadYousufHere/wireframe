import { Button } from '../../components/Button';
import { Input } from '../../components/Form';
import Wrapper from '../../components/Wrapper/Wrapper';
import './style.scss';
const PipConversion = () => {
  return (
    <Wrapper>
      <div className='pipconversion'>
        <div className='pipconversion__content'>
          <main className='row'>
            <Input
              type='text'
              label='Conversion Table'
            />

            <div className='action-btn'>
              <div className='left'></div>
              <div className='right'>
                <Button
                  title='Edit'
                  variant='outlined'
                />
                <Button
                  title='upload'
                  disabled
                  variant='outlined'
                />
              </div>
            </div>
          </main>
          <main className='row middle'>
            <div className='col left'>
              <label htmlFor=''>
                <span>Upload File</span>
              </label>
            </div>
            <div className='col right'>
              <Button
                title='Upload file'
                variant='primary'
              />
              <Button
                title='Upload table'
                variant='outlined'
                disabled
              />
            </div>
          </main>
          <main className='row middle'>
            <div className='col left'>
              <label htmlFor=''>
                <span>Download Table</span>
              </label>
            </div>
            <div className='action-box'>
              <Button
                title='Download'
                variant='outlined'
                withIcon
              />
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default PipConversion;
