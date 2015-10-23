import { SHOW_CARD, HIDE_CARD, TOGGLE_CARD } from './actions';

function card(state = SHOW_CARD, action) {
  	switch (action.type) {
  		case SHOW_CARD:
  		case HIDE_CARD:
			$('#'+action.id).slideToggle();
			return state;
  		default: return state;
  	}
}

export default card;