var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_4107_1 = new ol.format.GeoJSON();
var features_4107_1 = format_4107_1.readFeatures(json_4107_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_1.addFeatures(features_4107_1);
var lyr_4107_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_1, 
                style: style_4107_1,
                interactive: true,
                title: '<img src="styles/legend/4107_1.png" /> 4107'
            });
var format_7101_2 = new ol.format.GeoJSON();
var features_7101_2 = format_7101_2.readFeatures(json_7101_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_2.addFeatures(features_7101_2);
var lyr_7101_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101_2, 
                style: style_7101_2,
                interactive: true,
                title: '<img src="styles/legend/7101_2.png" /> 7101'
            });
var format_2325_3 = new ol.format.GeoJSON();
var features_2325_3 = format_2325_3.readFeatures(json_2325_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_3.addFeatures(features_2325_3);
var lyr_2325_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325_3, 
                style: style_2325_3,
                interactive: true,
    title: '2325<br />\
    <img src="styles/legend/2325_3_0.png" /> 4101<br />\
    <img src="styles/legend/2325_3_1.png" /> 4112<br />\
    <img src="styles/legend/2325_3_2.png" /> 4131<br />\
    <img src="styles/legend/2325_3_3.png" /> 4165<br />'
        });
var format_3101_4 = new ol.format.GeoJSON();
var features_3101_4 = format_3101_4.readFeatures(json_3101_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_4.addFeatures(features_3101_4);
var lyr_3101_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_4, 
                style: style_3101_4,
                interactive: true,
    title: '3101<br />\
    <img src="styles/legend/3101_4_0.png" /> 1<br />\
    <img src="styles/legend/3101_4_1.png" /> 5<br />'
        });
var format_5124_5 = new ol.format.GeoJSON();
var features_5124_5 = format_5124_5.readFeatures(json_5124_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_5.addFeatures(features_5124_5);
var lyr_5124_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_5, 
                style: style_5124_5,
                interactive: true,
                title: '<img src="styles/legend/5124_5.png" /> 5124'
            });
var format_6101_6 = new ol.format.GeoJSON();
var features_6101_6 = format_6101_6.readFeatures(json_6101_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_6.addFeatures(features_6101_6);
var lyr_6101_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6101_6, 
                style: style_6101_6,
                interactive: true,
                title: '<img src="styles/legend/6101_6.png" /> 6101'
            });
var format_5112_7 = new ol.format.GeoJSON();
var features_5112_7 = format_5112_7.readFeatures(json_5112_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5112_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5112_7.addFeatures(features_5112_7);
var lyr_5112_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5112_7, 
                style: style_5112_7,
                interactive: true,
                title: '<img src="styles/legend/5112_7.png" /> 5112'
            });
var format_Zonadetrabajo_8 = new ol.format.GeoJSON();
var features_Zonadetrabajo_8 = format_Zonadetrabajo_8.readFeatures(json_Zonadetrabajo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonadetrabajo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonadetrabajo_8.addFeatures(features_Zonadetrabajo_8);
var lyr_Zonadetrabajo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonadetrabajo_8, 
                style: style_Zonadetrabajo_8,
                interactive: true,
                title: '<img src="styles/legend/Zonadetrabajo_8.png" /> Zona de trabajo'
            });

lyr_OSMStandard_0.setVisible(true);lyr_4107_1.setVisible(true);lyr_7101_2.setVisible(true);lyr_2325_3.setVisible(true);lyr_3101_4.setVisible(true);lyr_5124_5.setVisible(true);lyr_6101_6.setVisible(true);lyr_5112_7.setVisible(true);lyr_Zonadetrabajo_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_4107_1,lyr_7101_2,lyr_2325_3,lyr_3101_4,lyr_5124_5,lyr_6101_6,lyr_5112_7,lyr_Zonadetrabajo_8];
lyr_4107_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', 'RULEID_1': 'RULEID_1', 'OVERRIDE_1': 'OVERRIDE_1', });
lyr_7101_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', });
lyr_2325_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'CODIGO_USO': 'CODIGO_USO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', });
lyr_3101_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', 'EJE_VIAL': 'EJE_VIAL', });
lyr_5124_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', });
lyr_6101_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'TALT': 'TALT', });
lyr_5112_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', 'TempId': 'TempId', });
lyr_Zonadetrabajo_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_4107_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'RULEID': 'Range', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', 'RULEID_1': 'Range', 'OVERRIDE_1': 'Binary', });
lyr_7101_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'RULEID': 'Range', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_2325_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'CODIGO_USO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'RULEID': 'TextEdit', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_3101_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'ESTADO_SUP': 'TextEdit', 'NUMERO_CAR': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'RULEID': 'TextEdit', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', 'EJE_VIAL': 'TextEdit', });
lyr_5124_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'DISPERSION': 'TextEdit', 'RULEID': 'TextEdit', 'PK_CUE': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_6101_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'TALT': 'TextEdit', });
lyr_5112_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', 'TempId': 'Range', });
lyr_Zonadetrabajo_8.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_4107_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', 'RULEID_1': 'no label', 'OVERRIDE_1': 'no label', });
lyr_7101_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'CODIGO_NOMBRE': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', });
lyr_2325_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOMBRE_GEO': 'no label', 'CODIGO_USO': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', });
lyr_3101_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUP': 'no label', 'NUMERO_CAR': 'no label', 'ACCESIBILI': 'no label', 'NOMBRE_GEO': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', 'EJE_VIAL': 'no label', });
lyr_5124_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOMBRE_GEO': 'no label', 'ESTADO_DRE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'RULEID': 'no label', 'PK_CUE': 'no label', 'GLOBALID': 'no label', });
lyr_6101_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'TALT': 'no label', });
lyr_5112_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', 'TempId': 'no label', });
lyr_Zonadetrabajo_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Zonadetrabajo_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});