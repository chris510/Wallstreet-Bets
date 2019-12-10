import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => ({
  modal: state.ui.modal
})
 
const mapDispatchToProps = dispatch => ({
  closeModal: (modal) => dispatch(closeModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
