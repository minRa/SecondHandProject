import styled from 'styled-components';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const RemoveCircleIconStyle = styled(RemoveCircleIcon)`
align-items: center;
justify-content: left;
cursor: pointer;
`;

export const DeleteForeverIconStyle= styled(DeleteForeverIcon)`
align-items: center;
justify-content: right;
cursor: pointer;
`;