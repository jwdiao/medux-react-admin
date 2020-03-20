import React, {useCallback} from 'react';

import Detail from './Detail';
import Editor from './Editor';
import {ItemDetail} from 'entity/role';
import {Modal} from 'antd';
import Search from './Search';
import Table from './Table';
import {connect} from 'react-redux';

interface StoreProps {
  currentOperation?: 'detail' | 'edit' | 'create';
  currentItem?: ItemDetail;
}

const Component: React.FC<StoreProps & DispatchProp> = ({dispatch, currentOperation, currentItem}) => {
  const onHideCurrent = useCallback(() => {
    dispatch(actions.adminRole.execCurrentItem());
  }, [dispatch]);

  return (
    <div className="g-adminPage">
      <h1>角色列表</h1>
      <Search />
      <Table />
      {currentItem && currentOperation === 'detail' && (
        <Modal wrapClassName="g-noBorderHeader" visible={true} onCancel={onHideCurrent} footer={null} title="角色详情" width={900}>
          <Detail />
        </Modal>
      )}
      {currentItem && (currentOperation === 'edit' || currentOperation === 'create') && (
        <Modal visible={currentOperation === 'edit' || currentOperation === 'create'} onCancel={onHideCurrent} footer={null} title={currentOperation === 'edit' ? '修改角色' : '新建角色'} width={900}>
          <Editor />
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps: (state: RootState) => StoreProps = state => {
  const thisModule = state.adminRole!;
  return {
    currentItem: thisModule.currentItem,
    currentOperation: thisModule.routeParams!.currentOperation,
  };
};

export default connect(mapStateToProps)(React.memo(Component));
