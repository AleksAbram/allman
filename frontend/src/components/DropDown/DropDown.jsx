import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ButtonBar from '../UI/ButtonBar/ButtonBar';

export default function MenuPopupState(props) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <ButtonBar variant="contained" {...bindTrigger(popupState)}>
            {props.title}
          </ButtonBar>
          <Menu {...bindMenu(popupState)}>
            {props.children?.map((el) => {
              return <MenuItem onClick={popupState.close}>{el.text}</MenuItem>
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


