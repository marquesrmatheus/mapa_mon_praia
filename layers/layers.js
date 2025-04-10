var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PecmCumbuco_1 = new ol.format.GeoJSON();
var features_PecmCumbuco_1 = format_PecmCumbuco_1.readFeatures(json_PecmCumbuco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PecmCumbuco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PecmCumbuco_1.addFeatures(features_PecmCumbuco_1);
var lyr_PecmCumbuco_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PecmCumbuco_1, 
                style: style_PecmCumbuco_1,
                popuplayertitle: 'Pecém - Cumbuco',
                interactive: true,
                title: '<img src="styles/legend/PecmCumbuco_1.png" /> Pecém - Cumbuco'
            });
var format_PecmTaba_2 = new ol.format.GeoJSON();
var features_PecmTaba_2 = format_PecmTaba_2.readFeatures(json_PecmTaba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PecmTaba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PecmTaba_2.addFeatures(features_PecmTaba_2);
var lyr_PecmTaba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PecmTaba_2, 
                style: style_PecmTaba_2,
                popuplayertitle: 'Pecém - Taíba',
                interactive: true,
                title: '<img src="styles/legend/PecmTaba_2.png" /> Pecém - Taíba'
            });
var group_MonitoramentodePraiaCIPP = new ol.layer.Group({
                                layers: [lyr_PecmCumbuco_1,lyr_PecmTaba_2,],
                                fold: "open",
                                title: 'Monitoramento de Praia - CIPP'});

lyr_GoogleHybrid_0.setVisible(true);lyr_PecmCumbuco_1.setVisible(true);lyr_PecmTaba_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_MonitoramentodePraiaCIPP];
lyr_PecmCumbuco_1.set('fieldAliases', {'Name': 'Name', });
lyr_PecmTaba_2.set('fieldAliases', {'Name': 'Name', });
lyr_PecmCumbuco_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_PecmTaba_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_PecmCumbuco_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_PecmTaba_2.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_PecmTaba_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});