//var RUTADAKI_HOME = "http://localhost:8080/RutadakiServer";
//var RUTADAKI_HOME = "http://detarsis.noip.me:8080/RutadakiServer";
// var RUTADAKI_HOME = "http://192.168.1.117:8080/RutadakiServer"
var RUTADAKI_HOME = "http://www.rutadaki.com/";
//var RUTADAKI_HOME = "http://85.56.25.90/RutadakiServer";
//var RUTADAKI_HOME = "http://www.rutadaki.com";

// Category global vars:

var CATEGORY_CONCERTS = "conciertos";
var CATEGORY_CULTURE = "arte_y_cultura";
var CATEGORY_ACTIVITIES = "actividades";
var CATEGORY_GOING_OUT = "salir";
var CATEGORY_SHOWS = "shows";
var CATEGORY_RESTAURANTS = "de_comer";

var AGENDA_TAB_NAME = "agenda";
var OUTSTANDING_TAB_NAME = "destacados";
var CONTACT_TAB_NAME = "contacto";

var CATEGORY_ID_CONCERTS = 1;
var CATEGORY_ID_CULTURE = 2;
var CATEGORY_ID_ACTIVITIES = 5;
var CATEGORY_ID_GOING_OUT = 4;
var CATEGORY_ID_SHOWS = 3;
var CATEGORY_ID_RESTAURANTS = 6;

var EVENTS_IMAGES_PATH = "events_images";

function getCategoryCode(category_name) {
	var result = -1;
	switch (category_name) {
	case CATEGORY_ACTIVITIES:
		result = CATEGORY_ID_ACTIVITIES;
		break;
	case CATEGORY_CULTURE:
		result = CATEGORY_ID_CULTURE;
		break;
	case CATEGORY_CONCERTS:
		result = CATEGORY_ID_CONCERTS;
		break;
	case CATEGORY_SHOWS:
		result = CATEGORY_ID_SHOWS;
		break;
	case CATEGORY_GOING_OUT:
		result = CATEGORY_ID_GOING_OUT;
		break;
	case CATEGORY_RESTAURANTS:
		result = CATEGORY_ID_RESTAURANTS;
		break;
	default:
		result = -1;
	break;
	}
	
	return result;
}