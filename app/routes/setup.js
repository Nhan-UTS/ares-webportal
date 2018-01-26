import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ReloadableRoute from 'ares-webclient/mixins/reloadable-route';

export default Route.extend(ReloadableRoute, {
    ajax: service(),
    titleToken: 'Setup',
        
    model: function() {
        let aj = this.get('ajax');
        return aj.queryOne('getSetupIndex');
    }
});
