import { memo, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePercentage } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { RiNumber1 } from "react-icons/ri";
import { Button } from "../../components/Button";
import "./style.scss";
import { Dropdown, Input } from "../../components/Form";
import { Modal } from "../../components/Modal";
import { Popup } from "../../components/Popup";
import Wrapper from "../../components/Wrapper/Wrapper";
import Chips from "../../components/Form/Chips";
import { FaPlus } from "react-icons/fa";
import { PipIcon } from "../../components/icons";

const ParameterOpt = memo(() => {
  const initialValues = [160, 180, 200];
  const [show, setShow] = useState<boolean>(false);
  const [addValue, setAddValue] = useState<string>("");
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddValue(e.target.value);
  };
  const [values, setvalues] = useState<number[]>(initialValues);
  const handleValueSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addValue) {
      setvalues([...values, parseInt(addValue)]);
      setAddValue("");
    }
  };
  const deleteHandler = (index: number) => {
    const newValues = values.filter((_, i) => i !== index);
    setvalues(newValues);
  };
  return (
    <Wrapper>
      <div className="parameteropt">
        <div className="parameteropt__content">
          <div className="row">
            <Dropdown label="Trading Strategy" id="trading-strategy" />
            <Dropdown label="Data Source" id="data-source" />
            <Dropdown label="Market" id="market" />
            <Dropdown label="Timeframe" id="timeframe" />
            <Input type="date" Icon={<AiOutlineCalendar />} label="From" />
            <Input type="date" Icon={<AiOutlineCalendar />} label="To" />
            <Dropdown label="Optimizing Stat" id="optimization-stat" />
          </div>
          <div className="row">
            <h2>Backtesting Settings</h2>
            <Input
              label="Cash"
              type="text"
              Icon={<BiDollar />}
              placeholder="1,000,000"
            />
            <Input
              label="Leverage"
              type="text"
              Icon={<RiNumber1 />}
              placeholder="50"
            />
            <Input
              label="Slipage"
              type="text"
              Icon={<PipIcon />}
              placeholder="-5"
            />
            <Input
              label="Spread"
              type="text"
              Icon={<PipIcon />}
              placeholder="10"
            />
            <Input
              label="Commission"
              type="text"
              Icon={<AiOutlinePercentage />}
              placeholder="2"
            />
          </div>
          <div className="row">
            <h2>Backtesting Settings</h2>
            <Input
              label="EMA"
              type="text"
              onAdd={() => setShow(true)}
              placeholder="13,463,938"
            />
            <Input
              label="ATR"
              type="text"
              onAdd={() => setShow(true)}
              placeholder="14"
            />
            <Input
              label="ADX"
              type="text"
              onAdd={() => setShow(true)}
              placeholder="14"
            />
            <Input
              label="ADX threshold"
              type="text"
              onAdd={() => setShow(true)}
              placeholder="14"
            />
            <Input
              label="Risk Size"
              type="text"
              placeholder="2"
              Icon={<AiOutlinePercentage />}
              onAdd={() => setShow(true)}
            />
          </div>
          <div className="row">
            <div className="action-box">
              <Button title="Run Strategy" variant="outlined" />
              <Button title="Download CSV" withIcon variant="outlined" />
            </div>
          </div>
          <div className="row">
            <h3>Total Cost</h3>
            <p>12,73$</p>
          </div>
        </div>
        <Modal setShow={() => setShow(false)} show={show}>
          <Popup title="EMA" onClose={() => setShow(false)}>
            <div className="values-box">
              <div className="values-box__content">
                <div className="row">
                  <div className="col">
                    <label htmlFor="value">
                      <span>Values</span>
                    </label>
                  </div>
                  <div className="col col__chips">
                    {values?.map((value, index) => (
                      <Chips
                        key={index}
                        value={value.toString()}
                        onDelete={() => deleteHandler(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleValueSubmit}>
              <div className="add-val">
                <Input
                  type="text"
                  label="Add value"
                  value={addValue}
                  placeholder="Insert values..."
                  onChange={onValueChange}
                />
                <button type="submit">
                  <FaPlus />
                </button>
              </div>
            </form>
            <div className="range-box">
              <div className="range-box__content">
                <Input
                  type="text"
                  label="Add Range"
                  placeholder="Insert values..."
                />
                <Input type="text" placeholder="Insert values..." />
                <button>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="action-box">
              <Button
                title="Done"
                variant="pill"
                onClick={() => setShow(false)}
              />
            </div>
          </Popup>
        </Modal>
      </div>
    </Wrapper>
  );
});

export default ParameterOpt;
