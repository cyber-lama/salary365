import React, {useState} from 'react';
import Lottie from 'react-lottie';

import Modal from '../components/Modal/Modal';
import PersonalDataModal from '../components/Modals/PersonalDataModal';
import PersonalDataDetailsModal from '../components/Modals/PersonalDataDetailsModal';
import TransactionCompleteModal from '../components/Modals/TransactionCompleteModal';
import TransactionDetailsModal from '../components/Modals/TransactionDetailsModal';

import animationData from '../assets/animations/congrat_anim.json';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
  },
};

const BaseTemplate = (args) => {
  const lottieOptions = {
    animationData, 
    loop: true,
    autoplay: true,
  };
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <div>
      <button onClick={()=>{setModalOpen(true);}}>Open Modal</button>
      <Modal open={isModalOpen} {...args} onClose={()=>{setModalOpen(false);}}>
        <>
          <Lottie options={lottieOptions} width={100} height={100} />
          some modal content
        </>
      </Modal>
    </div>
  );
};

const Template = (args) => {
  return (
    <Modal open={true}>
      {/* <PersonalDataModal /> */}
      {args.component}
    </Modal>
  );
};

const TransactionDetailsTemplate = (args) => {
  return (
    <Modal open={true}>
      <TransactionDetailsModal  {...args}/>
    </Modal>
  );
};

const PersonalDataDetailsTemplate = (args) => {
  return (
    <Modal open={true}>
      <PersonalDataDetailsModal  {...args}/>
    </Modal>
  );
};


export const Base = BaseTemplate.bind({});
Base.args = {
  closePosition: 'inside'
};

export const PersonalData = Template.bind({});
PersonalData.args = {
  component: <PersonalDataModal />
};

export const TransactionComplete = Template.bind({});
TransactionComplete.args = {
  component: <TransactionCompleteModal />
};

export const TransactionDetails = TransactionDetailsTemplate.bind({});
TransactionDetails.args = {
  totalSum: 14500,
  fee: 99,
};

export const PersonalDataDetails = PersonalDataDetailsTemplate.bind({});
PersonalDataDetails.args = {
  email: 'adoroshenko@dengisrazu',
  phone: '+7 995 456 78 90',
  snils: '342-665-329-09',
  employer: 'ООО "ФИНБРИДЖ"'
};



