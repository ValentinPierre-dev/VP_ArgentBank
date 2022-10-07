// React
import React, {useRef} from 'react';

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const downIcon = <FontAwesomeIcon icon={faChevronDown} />
const upIcon = <FontAwesomeIcon icon={faChevronUp} />

function TransactionsLine(props) {

  const arrowDown = useRef();
  const arrowUp = useRef();
  const moreInfo = useRef();

  function collapse() {
    arrowDown.current.classList.toggle('downArrow-hide');
    arrowUp.current.classList.toggle('upArrow-show');
    moreInfo.current.classList.toggle('moreInfo-open');
 }

  return (
    <div>
      <div className="transactionsLine">
        <div className="arrow" onClick={collapse}>
          <span className="downArrow-show" ref={arrowDown}>
            {downIcon}
          </span>
          <span className="upArrow-hide" ref={arrowUp}>
            {upIcon}
          </span>
        </div>
        <div className="transactionsLine-date">{props.date}</div>
        <div className="transactionsLine-descr">{props.descr}</div>
        <div className="transactionsLine-amount">{props.amount}</div>
        <div className="transactionsLine-balance">{props.balance}</div>
      </div>    
      <div className="moreInfo-closed" ref={moreInfo}>
        <p>Transaction Type: {props.transactionsType}</p>
        <p>
          Category: {props.category}{' '}
        </p>
        <p>
          Notes:{' '}
        </p>
      </div>  
    </div>
  );
}

export default TransactionsLine;