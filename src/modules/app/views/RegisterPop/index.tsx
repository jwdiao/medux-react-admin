import {Modal} from 'antd';
import React from 'react';
import {connect} from 'react-redux';
import RegisterForm from '../RegisterForm';

interface StoreProps {
  showPop: boolean;
}

const Component: React.FC<StoreProps & DispatchProp> = ({showPop, dispatch}) => {
  const onCancel = React.useCallback(() => {
    dispatch(actions.app.closesLoginOrRegisterPop());
  }, [dispatch]);

  return (
    <Modal visible={showPop} footer={null} width={350} onCancel={onCancel}>
      <RegisterForm />
    </Modal>
  );
};

const mapStateToProps: (state: RootState) => StoreProps = (state) => {
  return {
    showPop: state.app!.showLoginOrRegisterPop === 'register',
  };
};
export default connect(mapStateToProps)(React.memo(Component));
