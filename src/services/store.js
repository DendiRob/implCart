import { legacy_createStore as createStore} from 'redux';
import reduser from '../reducers';

const store = createStore(reduser)

export{ store }