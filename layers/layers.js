ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([319149.675430, 4063476.332613, 328145.312316, 4069534.618679]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Rastervirtual_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rastervirtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rastervirtual_1.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_Shannon_yunquera_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Shannon_yunquera",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Shannon_yunquera_2.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.237000, 4063575.854500, 327012.237000, 4069345.854500]
                            })
                        });
var lyr_Distancia_canales_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia_canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distancia_canales_3.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_Exposicion_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Exposicion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Exposicion_4.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_dens_reclass_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "dens_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dens_reclass_5.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var format_Segmentacion_f_6 = new ol.format.GeoJSON();
var features_Segmentacion_f_6 = format_Segmentacion_f_6.readFeatures(json_Segmentacion_f_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Segmentacion_f_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacion_f_6.addFeatures(features_Segmentacion_f_6);
var lyr_Segmentacion_f_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacion_f_6, 
                style: style_Segmentacion_f_6,
                interactive: true,
                title: '<img src="styles/legend/Segmentacion_f_6.png" /> Segmentacion_f'
            });
var format_limite_yunquera_7 = new ol.format.GeoJSON();
var features_limite_yunquera_7 = format_limite_yunquera_7.readFeatures(json_limite_yunquera_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_limite_yunquera_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_yunquera_7.addFeatures(features_limite_yunquera_7);
var lyr_limite_yunquera_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limite_yunquera_7, 
                style: style_limite_yunquera_7,
                interactive: false,
                title: '<img src="styles/legend/limite_yunquera_7.png" /> limite_yunquera'
            });
var format_ocurrencias_gbif_ETRS89_30N_8 = new ol.format.GeoJSON();
var features_ocurrencias_gbif_ETRS89_30N_8 = format_ocurrencias_gbif_ETRS89_30N_8.readFeatures(json_ocurrencias_gbif_ETRS89_30N_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ocurrencias_gbif_ETRS89_30N_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ocurrencias_gbif_ETRS89_30N_8.addFeatures(features_ocurrencias_gbif_ETRS89_30N_8);cluster_ocurrencias_gbif_ETRS89_30N_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ocurrencias_gbif_ETRS89_30N_8
});
var lyr_ocurrencias_gbif_ETRS89_30N_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ocurrencias_gbif_ETRS89_30N_8, 
                style: style_ocurrencias_gbif_ETRS89_30N_8,
                interactive: true,
                title: '<img src="styles/legend/ocurrencias_gbif_ETRS89_30N_8.png" /> ocurrencias_gbif_ETRS89_30N'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Rastervirtual_1.setVisible(true);lyr_Shannon_yunquera_2.setVisible(true);lyr_Distancia_canales_3.setVisible(true);lyr_Exposicion_4.setVisible(true);lyr_dens_reclass_5.setVisible(true);lyr_Segmentacion_f_6.setVisible(true);lyr_limite_yunquera_7.setVisible(true);lyr_ocurrencias_gbif_ETRS89_30N_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Rastervirtual_1,lyr_Shannon_yunquera_2,lyr_Distancia_canales_3,lyr_Exposicion_4,lyr_dens_reclass_5,lyr_Segmentacion_f_6,lyr_limite_yunquera_7,lyr_ocurrencias_gbif_ETRS89_30N_8];
lyr_Segmentacion_f_6.set('fieldAliases', {'fid': 'fid', 'Value': 'Value', 'AREA': 'AREA', });
lyr_limite_yunquera_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CODIGO_JA': 'CODIGO_JA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_ocurrencias_gbif_ETRS89_30N_8.set('fieldAliases', {'species': 'species', 'scientific': 'scientific', 'decimalLat': 'decimalLat', 'decimalLon': 'decimalLon', });
lyr_Segmentacion_f_6.set('fieldImages', {'fid': 'TextEdit', 'Value': 'TextEdit', 'AREA': '', });
lyr_limite_yunquera_7.set('fieldImages', {'NOMBRE': 'TextEdit', 'CODIGO_JA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_ocurrencias_gbif_ETRS89_30N_8.set('fieldImages', {'species': '', 'scientific': '', 'decimalLat': '', 'decimalLon': '', });
lyr_Segmentacion_f_6.set('fieldLabels', {'fid': 'header label', 'Value': 'no label', 'AREA': 'no label', });
lyr_limite_yunquera_7.set('fieldLabels', {'NOMBRE': 'no label', 'CODIGO_JA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_ocurrencias_gbif_ETRS89_30N_8.set('fieldLabels', {'species': 'header label', 'scientific': 'no label', 'decimalLat': 'no label', 'decimalLon': 'no label', });
lyr_ocurrencias_gbif_ETRS89_30N_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});