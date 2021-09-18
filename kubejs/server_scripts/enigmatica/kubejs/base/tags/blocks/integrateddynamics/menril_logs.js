onEvent('block.tags', (event) => {
    event.get('integrateddynamics:menril_logs').add('integrateddynamics:menril_log_filled');
});
