sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'it.app.myapp',
            componentId: 'CoursesObjectPage',
            contextPath: '/Categories/Courses'
        },
        CustomPageDefinitions
    );
});