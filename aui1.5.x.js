(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("aui1.5.x", function(server, options) {
    server._aui = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "aui1.5.x",
 "!define": {
  "_yui": {
   "aui_autocomplete": {
    "AutoComplete": {
     "!type": "fn(config: +Object) -> +_yui.aui_autocomplete.AutoComplete",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "alwaysShowContainer": {
       "!type": "bool",
       "!doc": "Always show the results container, instead of only showing when the \nuser is requesting them."
      },
      "autoHighlight": {
       "!type": "bool",
       "!doc": "Automatically highlight the first item in the list when the results are\nmade visible."
      },
      "applyLocalFilter": {
       "!type": "bool",
       "!doc": "If set to true, the <a href=\"AutoComplete.html#method_filterResults\">filterResults</a> \nmethod will be run on the response from the data source."
      },
      "button": {
       "!type": "bool",
       "!doc": "To use a button"
      },
      "dataSource": {
       "!type": "+Object",
       "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
      },
      "dataSourceType": {
       "!type": "string",
       "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
      },
      "delimChar": {
       "!type": "string",
       "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
      },
      "forceSelection": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
      },
      "input": {
       "!type": "string",
       "!doc": "The input field which will recieve the users input."
      },
      "matchKey": {
       "!type": "string",
       "!doc": "The key or numeric index in the schema to match the result against."
      },
      "maxResultsDisplayed": {
       "!type": "number",
       "!doc": "The maximum number of results to display."
      },
      "minQueryLength": {
       "!type": "number",
       "!doc": "The minimum number of characters required to query the data source."
      },
      "queryDelay": {
       "!type": "number",
       "!doc": "The amount of time in seconds to delay before submitting the query."
      },
      "queryInterval": {
       "!type": "number",
       "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
      },
      "queryMatchCase": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
      },
      "queryMatchContains": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
      },
      "queryQuestionMark": {
       "!type": "bool",
       "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and \nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
      },
      "schema": {
       "!type": "+Object",
       "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
      },
      "schemaType": {
       "!type": "string",
       "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
      },
      "suppressInputUpdate": {
       "!type": "bool",
       "!doc": "Whether or not the input field should be updated with selections."
      },
      "typeAhead": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the \ninput field should be automatically updated with the first result as the user types, \nautomatically selecting the portion of the text the user has not typed yet."
      },
      "typeAheadDelay": {
       "!type": "number",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds \nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
      },
      "uniqueName": {
       "!type": "string",
       "!doc": "The unique ID of the input element."
      },
      "doBeforeExpandContainer": {
       "!type": "fn(query: string, allResults: +Object) -> bool",
       "!doc": "An overridable method that is executed before the result container is shown.\nThe method can return false to prevent the container from being shown."
      },
      "doBeforeLoadData": {
       "!type": "fn(event: +EventFacade) -> bool",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "filterResults": {
       "!type": "fn(event: +EventFacade) -> +Object",
       "!doc": "Executed by the data source as a mechanism to do simple client-side\nfiltering of the results."
      },
      "formatResult": {
       "!type": "fn(result: +Object, request: string, resultMatch: string) -> string",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +Object",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      },
      "sendQuery": {
       "!type": "fn(query: string)",
       "!doc": "Sends a query request to the data source object."
      }
     },
     "AutoComplete.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "AutoComplete.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_button_item": {
    "ButtonItem": {
     "!type": "fn(config: +Object) -> +_yui.aui_button_item.ButtonItem",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "undefined": {
       "!type": "fn()",
       "!doc": "Maps an array or object to a resulting array, using the\nreturn value of fn as the values for the new array.\nLike A.each, this function can accept an object or an array."
      },
      "activeState": {
       "!type": "bool",
       "!doc": "Whether to track the active state of the button."
      },
      "classNames": {
       "!type": "+Object",
       "!doc": "An object map of the CSS class names to use for the different interaction states."
      },
      "defaultState": {
       "!type": "bool",
       "!doc": "Whether to apply the default interaction state to the button"
      },
      "handler": {
       "!type": "fn()",
       "!doc": "An event callback to handle when a user interacts with the button.\nThis can either be a function that will be attached on click, or\nan object map that accepts the following keys:\n<code>{fn: // The function to execute\ncontext: // The context to execute the function in\ntype: // The type of event to listen for (defaults to \"click\")\n}</code>"
      },
      "hoverState": {
       "!type": "bool",
       "!doc": "An id that can be used to identify a button."
      },
      "icon": {
       "!type": "string",
       "!doc": "The icon to use inside of the button. Possible values are:"
      },
      "iconNode": {
       "!type": "string",
       "!doc": "DOM Node to display the icon of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-icon</code>."
      },
      "label": {
       "!type": "string",
       "!doc": "Text to use inside of the button."
      },
      "labelNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-label</code>."
      },
      "title": {
       "!type": "string",
       "!doc": "Text to use as the title attribute of the button."
      },
      "type": {
       "!type": "string",
       "!doc": "Button type."
      }
     },
     "ButtonItem.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ButtonItem.AUGMENTS": {
      "!type": "+array",
      "!doc": "Static property provides an array to specify which classes augment this one."
     },
     "ButtonItem.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ButtonItem."
     },
     "ButtonItem.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_calendar": {
    "Calendar": {
     "!type": "fn(config: +Object) -> +_yui.aui_calendar.Calendar",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype",
      "allowNone": {
       "!type": "bool",
       "!doc": "Wheather displays the \"none\" link on the Calendar footer."
      },
      "blankDays": {
       "!type": "+NodeList",
       "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
      },
      "currentDay": {
       "!type": "number",
       "!doc": "Current day number."
      },
      "currentMonth": {
       "!type": "number",
       "!doc": "Current month number."
      },
      "currentYear": {
       "!type": "number",
       "!doc": "Current year number."
      },
      "dateFormat": {
       "!type": "string",
       "!doc": "The default date format string which can be overriden for\nlocalization support. The format must be valid according to\n<a href=\"DataType.Date.html\">A.DataType.Date.format</a>."
      },
      "dates": {
       "!type": "+Array",
       "!doc": "Dates which the calendar will show as selected by default."
      },
      "firstDayOfWeek": {
       "!type": "number",
       "!doc": "First day of the week: Sunday is 0, Monday is 1."
      },
      "headerContentNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference to be the header of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-hd</code>."
      },
      "headerTitleNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference to be the title of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
      },
      "iconNextNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference to be the icon next of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-prev</code>."
      },
      "iconPrevNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference to be the icon prev of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-prev</code>."
      },
      "maxDate": {
       "!type": "string",
       "!doc": "Maximum allowable date. Values supported by the Date\nconstructor are supported."
      },
      "minDate": {
       "!type": "+Date",
       "!doc": "Minimum allowable date. Values supported by the Date\nconstructor are supported."
      },
      "monthDays": {
       "!type": "+NodeList",
       "!doc": "NodeList reference containing the days of the month of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-day</code>."
      },
      "monthDaysNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference which contains all month days nodes of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-monthdays</code>."
      },
      "noneLinkNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference to be the \"none\" link of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
      },
      "paddingDaysEnd": {
       "!type": "+NodeList",
       "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
      },
      "paddingDaysStart": {
       "!type": "+NodeList",
       "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
      },
      "selectMultipleDates": {
       "!type": "bool",
       "!doc": "Wether accepts to select multiple dates."
      },
      "setValue": {
       "!type": "bool",
       "!doc": "If true set the selected date with the correct\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a> to the\nvalue of the input field which is hosting the Calendar."
      },
      "showOtherMonth": {
       "!type": "bool",
       "!doc": "Wheather displays the days for the other months."
      },
      "showToday": {
       "!type": "bool",
       "!doc": "Wheather displays the \"today\" link on the Calendar footer."
      },
      "strings": {
       "!type": "+Object",
       "!doc": "Strings for localization."
      },
      "todayLinkNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference to be the \"today\" link of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
      },
      "weekDays": {
       "!type": "+NodeList",
       "!doc": "NodeList reference containing the days of the week of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-week</code>."
      },
      "weekDaysNode": {
       "!type": "+aui_node.Node",
       "!doc": "DOM node reference which contains all week days nodes of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-weekdays</code>."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Clear all selected dates on the Calendar."
      },
      "eachSelectedDate": {
       "!type": "fn(fn: fn(), dates: +Dates)",
       "!doc": "Loop each date from <a href=\"Calendar.html#config_dates\">dates</a> and\nexecutes a callback."
      },
      "findMonthStart": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the first day of the month of the passed year."
      },
      "formatDate": {
       "!type": "fn(date: +Date, mask: string) -> string",
       "!doc": "Format a date with the passed mask. Used on\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a>."
      },
      "getCurrentDate": {
       "!type": "fn() -> +Date",
       "!doc": "Get current date."
      },
      "getDaysInMonth": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the number of days in the passed year and month."
      },
      "getDetailedSelectedDates": {
       "!type": "fn() -> +Array",
       "!doc": "Get an Array with selected dates with detailed information (day, month, year).\n<pre><code>[{\n\tyear: date.getFullYear(),\n\tmonth: date.getMonth(),\n\tday: date.getDate()\n}]</code></pre>"
      },
      "getFirstDayOfWeek": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the first day of week of the passed year and month."
      },
      "getFormattedSelectedDates": {
       "!type": "fn() -> +Array",
       "!doc": "Get the selected dates formatted by the\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a>."
      },
      "getSelectedDates": {
       "!type": "fn() -> +Array",
       "!doc": "Get the selected dates."
      },
      "isAlreadySelected": {
       "!type": "fn(date: +Date) -> bool",
       "!doc": "Check if a date is already selected."
      },
      "isOutOfRangeDate": {
       "!type": "fn(date: +Date)",
       "!doc": "Check if the passed date is out of range. Compared with the\n<a href=\"Calendar.html#config_minDate\">minDate</a> and\n<a href=\"Calendar.html#config_maxDate\">maxDate</a>."
      },
      "navigateMonth": {
       "!type": "fn(offset: number)",
       "!doc": "Navigate through months and re-sync the UI."
      },
      "removeDate": {
       "!type": "fn(date: +Date)",
       "!doc": "Remove the passed date from\n<a href=\"Calendar.html#config_dates\">dates</a>."
      },
      "selectNextMonth": {
       "!type": "fn()",
       "!doc": "Navigate to the next month. Fired from the next icon on the Calendar\nheader."
      },
      "selectPrevMonth": {
       "!type": "fn()",
       "!doc": "Navigate to the previous month. Fired from the previous icon on the\nCalendar header."
      },
      "selectToday": {
       "!type": "fn()",
       "!doc": "Select today date on the Calendar."
      },
      "setCurrentDate": {
       "!type": "fn(date: +Date)",
       "!doc": "Update the currentDay, currentMonth and currentYear values."
      }
     },
     "Calendar.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Calendar.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Calendar."
     },
     "ProgressBar.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    },
    "DatePickerSelect": {
     "!type": "fn(config: +Object) -> +_yui.aui_calendar.DatePickerSelect",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "appendOrder": {
       "!type": "+Array",
       "!doc": "The order the selects elements are appended to the\n<a href=\"DatePickerSelect.html#config_srcNode\">srcNode</a>."
      },
      "buttonNode": {
       "!type": "string",
       "!doc": "DOM Node to display the button of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-buttonitem</code>."
      },
      "calendar": {
       "!type": "+Object",
       "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
      },
      "dayNode": {
       "!type": "string",
       "!doc": "DOM Node to display the day of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "dayNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_dayNode\">dayNode</a>."
      },
      "monthNode": {
       "!type": "string",
       "!doc": "DOM Node to display the month of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "monthNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_monthNode\">monthNode</a>."
      },
      "nullableDay": {
       "!type": "bool",
       "!doc": "If true the select element for the day will be nullable"
      },
      "nullableMonth": {
       "!type": "bool",
       "!doc": "If true the select element for the month will be nullable"
      },
      "nullableYear": {
       "!type": "bool",
       "!doc": "If true the select element for the year will be nullable"
      },
      "populateDay": {
       "!type": "bool",
       "!doc": "If true the select element for the days will be automatic\npopulated."
      },
      "populateMonth": {
       "!type": "bool",
       "!doc": "If true the select element for the month will be automatic\npopulated."
      },
      "populateYear": {
       "!type": "bool",
       "!doc": "If true the select element for the year will be automatic\npopulated."
      },
      "selectWrapperNode": {
       "!type": "string",
       "!doc": "DOM Node to display the selects of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-select-wrapper</code>."
      },
      "trigger": {
       "!type": "+aui_node.Node",
       "!doc": "Trigger element to open the calendar. Inherited from\n<a href=\"OverlayContext.html#config_trigger\">OverlayContext</a>."
      },
      "yearNode": {
       "!type": "string",
       "!doc": "DOM Node to display the year of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "yearNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_yearNode\">yearNode</a>."
      },
      "yearRange": {
       "!type": "+Array",
       "!doc": "Year range to be displayed on the year select element. By default\nit displays from -10 to +10 years from the current year."
      }
     },
     "DatePickerSelect.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "DatePickerSelect.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the DatePickerSelect."
     },
     "DatePickerSelect.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_char_counter": {
    "CharCounter": {
     "!type": "fn(config: +Object) -> +_yui.aui_char_counter.CharCounter",
     "prototype": {
      "!proto": "Base.prototype",
      "counter": {
       "!type": "+aui_node.Node",
       "!doc": "Node or Selector to display the information of the counter."
      },
      "maxLength": {
       "!type": "number",
       "!doc": "Max number of characters the <a\nhref=\"CharCounter.html#config_input\">input</a> can have."
      },
      "input": {
       "!type": "+aui_node.Node",
       "!doc": "Node or Selector for the input field. Required."
      },
      "checkLength": {
       "!type": "fn()",
       "!doc": "Check the current value of the <a\nhref=\"CharCounter.html#config_input\">input</a>, truncate the data if\nneeded, and re-sync the UI. Fired from <a\n href=\"CharCounter.html#method__onInputChange\">_onInputChange</a>."
      }
     },
     "CharCounter.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "CharCounter.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the CharCounter."
     }
    }
   },
   "aui_color_picker": {
    "ColorPicker": {
     "!type": "fn(config: +Object) -> +_yui.aui_color_picker.ColorPicker",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype"
     },
     "ColorPicker.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ColorPicker.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPicker."
     }
    }
   },
   "aui_component": {
    "Component": {
     "!type": "fn(config: +Object) -> +_yui.aui_component.Component",
     "prototype": {
      "!proto": "Widget.prototype",
      "useARIA": {
       "!type": "bool",
       "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States should be\nenabled for the Widget."
      },
      "cssClass": {
       "!type": "string",
       "!doc": "CSS class to be automatically added to the <code>boundingBox</code>."
      },
      "hideClass": {
       "!type": "string",
       "!doc": "css class added to hide the <code>boundingBox</code> when\n<a href=\"Component.html#config_visible\">visible</a> is set to\n<code>false</code>."
      },
      "render": {
       "!type": "bool",
       "!doc": "If <code>true</code> the render phase will be autimatically invoked\npreventing the <code>.render()</code> manual call."
      },
      "clone": {
       "!type": "fn(config: +Object) -> +Widget",
       "!doc": "Clone the current Component."
      },
      "toggle": {
       "!type": "fn(visible: ?)",
       "!doc": "Toggle the visibility of the Panel toggling the value of the\n<a href=\"Widget.html#config_visible\">visible</a> attribute."
      }
     },
     "Component.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Component.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Component."
     }
    },
    "CellEditorSupport": {
     "!type": "fn(config: +Object) -> +_yui.aui_component.CellEditorSupport",
     "prototype": {
      "!proto": "Base.prototype",
      "dataSource": {
       "!type": "+Object",
       "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
      },
      "dataSourceType": {
       "!type": "string",
       "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
      },
      "schema": {
       "!type": "+Object",
       "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
      },
      "schemaType": {
       "!type": "string",
       "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
      },
      "button": {
       "!type": "bool",
       "!doc": "To use a button"
      },
      "delimChar": {
       "!type": "string",
       "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
      },
      "forceSelection": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
      },
      "input": {
       "!type": "string",
       "!doc": "The input field which will recieve the users input."
      },
      "matchKey": {
       "!type": "string",
       "!doc": "The key or numeric index in the schema to match the result against."
      },
      "minQueryLength": {
       "!type": "number",
       "!doc": "The minimum number of characters required to query the data source."
      },
      "queryDelay": {
       "!type": "number",
       "!doc": "The amount of time in seconds to delay before submitting the query."
      },
      "queryInterval": {
       "!type": "number",
       "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
      },
      "queryMatchCase": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
      },
      "queryMatchContains": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
      },
      "queryQuestionMark": {
       "!type": "bool",
       "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and \nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
      },
      "suppressInputUpdate": {
       "!type": "bool",
       "!doc": "Whether or not the input field should be updated with selections."
      },
      "typeAhead": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the \ninput field should be automatically updated with the first result as the user types, \nautomatically selecting the portion of the text the user has not typed yet."
      },
      "typeAheadDelay": {
       "!type": "number",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds \nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
      },
      "uniqueName": {
       "!type": "string",
       "!doc": "The unique ID of the input element."
      },
      "doBeforeLoadData": {
       "!type": "fn(event: +EventFacade) -> bool",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "formatResult": {
       "!type": "fn(result: +Object, request: string, resultMatch: string) -> string",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +Object",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      }
     },
     "AutoComplete.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_datatype": {
    "DataType": {
     "Boolean": {
      "!type": "fn()",
      "prototype": {
       "parse": {
        "!type": "fn(data: ?) -> bool",
        "!doc": "Parses any <code>falsey</code> value to <code>false</code> and\n<code>non-falsey</code> to <code>true</code>."
       }
      }
     },
     "String": {
      "!type": "fn()",
      "prototype": {
       "evaluate": {
        "!type": "fn(data: ?) -> bool",
        "!doc": "Evaluates a string to a primitive value (if possible). Supports\n<code>true</code> and <code>false</code> also. Unrecognized strings are\nreturned without any modification."
       }
      }
     }
    },
    "A": {
     "DataType": {
      "DateMath": {
       "!type": "fn()",
       "DAY": {
        "!type": "string",
        "!doc": "Constant field representing Day"
       },
       "WEEK": {
        "!type": "string",
        "!doc": "Constant field representing Week"
       },
       "YEAR": {
        "!type": "string",
        "!doc": "Constant field representing Year"
       },
       "MONTH": {
        "!type": "string",
        "!doc": "Constant field representing Month"
       },
       "MINUTES": {
        "!type": "string",
        "!doc": "Constant field representing Minutes"
       },
       "HOUR": {
        "!type": "string",
        "!doc": "Constant field representing Hour"
       },
       "SECONDS": {
        "!type": "string",
        "!doc": "Constant field representing Seconds"
       },
       "MAX_MONTH_LENGTH": {
        "!type": "number",
        "!doc": "Constant field representing the number of maximum days in a month"
       },
       "WEEK_LENGTH": {
        "!type": "number",
        "!doc": "Constant field representing the number of maximum days in a week"
       },
       "ONE_DAY_MS": {
        "!type": "number",
        "!doc": "Constant field representing one day, in milliseconds"
       },
       "ONE_HOUR_MS": {
        "!type": "number",
        "!doc": "Constant field representing one hour, in milliseconds"
       },
       "ONE_MINUTE_MS": {
        "!type": "number",
        "!doc": "Constant field representing one minute, in milliseconds"
       },
       "ONE_SECOND_MS": {
        "!type": "number",
        "!doc": "Constant field representing one second, in milliseconds"
       },
       "WEEK_ONE_JAN_DATE": {
        "!type": "number",
        "!doc": "Constant field representing the date in first week of January\nwhich identifies the first week of the year.\n<p>\nIn the U.S, Jan 1st is normally used based on a Sunday start of week.\nISO 8601, used widely throughout Europe, uses Jan 4th, based on a Monday start of week.\n</p>"
       },
       "prototype": {
        "add": {
         "!type": "fn(date: +Date, field: string, amount: number) -> +Date",
         "!doc": "Adds the specified amount of time to the this instance."
        },
        "compare": {
         "!type": "fn(d1: +Date, d2: +Date) -> bool",
         "!doc": "Compare dates."
        },
        "subtract": {
         "!type": "fn(date: +Date, field: number, amount: number) -> +Date",
         "!doc": "Subtracts the specified amount of time from the this instance."
        },
        "before": {
         "!type": "fn(date: +Date, compareTo: +Date) -> bool",
         "!doc": "Determines whether a given date is before another date on the calendar."
        },
        "after": {
         "!type": "fn(date: +Date, compareTo: +Date) -> bool",
         "!doc": "Determines whether a given date is after another date on the calendar."
        },
        "between": {
         "!type": "fn(date: +Date, dateBegin: +Date, dateEnd: +Date) -> bool",
         "!doc": "Determines whether a given date is between two other dates on the calendar."
        },
        "getJan1": {
         "!type": "fn(calendarYear: number) -> +Date",
         "!doc": "Retrieves a JavaScript Date object representing January 1 of any given year."
        },
        "getDayOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of days between the specified dates."
        },
        "getHoursOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of hours between the specified dates."
        },
        "getMinutesOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of minutes between the specified dates."
        },
        "getSecondsOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of seconds between the specified dates."
        },
        "getWeekNumber": {
         "!type": "fn(date: +Date, firstDayOfWeek: number, janDate: number) -> number",
         "!doc": "Calculates the week number for the given date. Can currently support standard\nU.S. week numbers, based on Jan 1st defining the 1st week of the year, and\nISO8601 week numbers, based on Jan 4th defining the 1st week of the year."
        },
        "undefined": {
         "!type": "fn(dt: +Date, startOfWeek: number) -> +Date",
         "!doc": "Get the first day of the week, for the give date."
        },
        "isWeekDay": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is a week day."
        },
        "isTueOrThu": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is a Tuesday or Thursday."
        },
        "isMonWedOrFri": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is a Monday, Wednesday or Friday."
        },
        "isNextDay": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!doc": "Chechs if the {date2} is the next day."
        },
        "isNextDayBoundary": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!doc": "Chechs if the {date2} is the next day at 00:00:00."
        },
        "isDayOverlap": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!doc": "Chechs if the passed date is between two days."
        },
        "isToday": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is today."
        },
        "isSameMonth": {
         "!type": "fn(d1: +Date, d2: +Date) -> ?",
         "!doc": "Chechs if the passed dates are in the same month."
        },
        "isYearOverlapWeek": {
         "!type": "fn(weekBeginDate: +Date) -> bool",
         "!doc": "Determines if a given week overlaps two different years."
        },
        "isMonthOverlapWeek": {
         "!type": "fn(weekBeginDate: +Date) -> bool",
         "!doc": "Determines if a given week overlaps two different months."
        },
        "findMonthStart": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Gets the first day of a month containing a given date."
        },
        "findMonthEnd": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Gets the last day of a month containing a given date."
        },
        "clearTime": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Clears the time fields from a given date, effectively setting the time to 12 noon."
        },
        "safeClearTime": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Clears the time fields from a given date, effectively setting the time to\n12 noon. This is \"safe\" because clones the date before clear, not affecting\nthe passed reference."
        },
        "toMidnight": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Set the time fields from a given date to midnight."
        },
        "clone": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Clone the passed date object."
        },
        "getDate": {
         "!type": "fn(y: number, m: number, d: number) -> +Date",
         "!doc": "Returns a new JavaScript Date object, representing the given year, month and date. Time fields (hr, min, sec, ms) on the new Date object\nare set to 0. The method allows Date instances to be created with the a year less than 100. \"new Date(year, month, date)\" implementations\nset the year to 19xx if a year (xx) which is less than 100 is provided.\n<p>\n<em>NOTE:</em>Validation on argument values is not performed. It is the callers responsibility to ensure\narguments are valid as per the ECMAScript-262 Date object specification for the new Date(year, month[, date]) constructor.\n</p>"
        }
       }
      }
     }
    },
    "DatepickerManager": {
     "!type": "fn(config: +Object) -> +_yui.aui_datatype.DatepickerManager",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayManager.prototype",
      "calendar": {
       "!type": "+Object",
       "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
      },
      "formatter": {
       "!type": "fn()",
       "!doc": "Function to format the array of the selected dates before set the\nvalue of the input."
      },
      "setValue": {
       "!type": "bool",
       "!doc": "If true set the selected date with the correct\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a> to the\nvalue of the input field which is hosting the Calendar."
      },
      "stack": {
       "!type": "bool",
       "!doc": "If true is able to do stacking with another overlays."
      },
      "zIndexBase": {
       "!type": "number",
       "!doc": "ZIndex default value passed to the\n<a href=\"OverlayManager.html#config_zIndexBase\">zIndexBase</a> of\n<a href=\"OverlayManager.html\">OverlayManager</a>."
      }
     }
    }
   },
   "aui_delayed_task": {
    "DelayedTask": {
     "!type": "fn(config: +Object, fn: fn(), scope: +Object, args: ?) -> +_yui.aui_delayed_task.DelayedTask",
     "prototype": {
      "delay": {
       "!type": "fn(delay: number, newFn: fn(), newScope: +Object, newArgs: ?)",
       "!doc": "<p>This function is responsible to execute the user callback, passed in\nthe <code>constructor</code> after <code>delay</code> milliseconds.</p>\n\nExample:\n\n<pre><code>// executes after 1000ms the callback\ndelayed.delay(1000);</code></pre>"
      },
      "cancel": {
       "!type": "fn()",
       "!doc": "Cancel the delayed task in case its running (i.e., clearInterval from\nthe current running <a href=\"DelayedTask.html#property__id\">_id</a>)."
      }
     }
    }
   },
   "aui_dialog": {
    "Dialog": {
     "!type": "fn(config: +Object) -> +_yui.aui_dialog.Dialog",
     "prototype": {
      "!proto": "_yui.aui_panel.Panel.prototype",
      "bodyContent": {
       "!type": "+aui_node.Node",
       "!doc": "See <a href=\"WidgetStdMod.html#config_bodyContent\">WidgetStdMod bodyContent</a>."
      },
      "buttons": {
       "!type": "+Array",
       "!doc": "<p>Array of object literals, each containing a set of properties\ndefining a button to be appended into the Dialogs footer. Each\nbutton object in the buttons array can have two properties:</p>\n\n<dl>\n   <dt>text:</dt>\n   <dd>\n       The text that will display on the face of the button. The text can include\n       HTML, as long as it is compliant with HTML Button specifications.\n   </dd>\n   <dt>handler:</dt>\n   <dd>\n       A reference to a function that should fire when the button is clicked.\n       (In this case scope of this function is always its Dialog instance.)\n   </dd>\n</dl>"
      },
      "close": {
       "!type": "fn()",
       "!doc": "Fires the close event to close the Dialog."
      },
      "constrain2view": {
       "!type": "+Object",
       "!doc": "Will attempt to constrain the dialog to the boundaries of the\nviewport region."
      },
      "destroyOnClose": {
       "!type": "bool",
       "!doc": "Invoke the <a href=\"Dialog.html#method_destroy\">destroy</a>\nmethod when the dialog is closed (i.e., remove the Dialog\n<code>boundingBox</code> from the body, purge events etc)."
      },
      "dragConfig": {
       "!type": "?",
       "!doc": "Drag configuration."
      },
      "draggable": {
       "!type": "bool",
       "!doc": "Boolean specifying if the Panel should be draggable."
      },
      "dragInstance": {
       "!type": "+A.DD.Drag",
       "!doc": "Stores the Drag instance for the <code>A.DD.Drag</code> used by\nthis Dialog."
      },
      "focusOn": {
       "!type": "+array",
       "!doc": "An array of objects corresponding to the nodes and events that will trigger a re-focus back on the widget.\nThe implementer can supply an array of objects, with each object having the following properties:\n<p>eventName: (string, required): The eventName to listen to.</p>\n<p>node: (Y.Node, optional): The Y.Node that will fire the event (defaults to the boundingBox of the widget)</p>\n<p>By default, this attribute consists of two objects which will cause the widget to re-focus if anything\noutside the widget is clicked on or focussed upon.</p>"
      },
      "modal": {
       "!type": "bool",
       "!doc": "True if the Panel should be displayed in a modal fashion,\nautomatically creating a transparent mask over the document that\nwill not be removed until the Dialog is dismissed. Uses\n<a href=\"OverlayMask.html\">OverlayMask</a>."
      },
      "resizable": {
       "!type": "bool",
       "!doc": "Boolean specifying if the Panel should be resizable."
      },
      "resizableConfig": {
       "!type": "?",
       "!doc": "Resize configuration."
      },
      "resizableInstance": {
       "!type": "+A.DD.Drag",
       "!doc": "Stores the Resize instance for the <code>A.Resize</code> used by\nthis Dialog."
      },
      "stack": {
       "!type": "bool",
       "!doc": "If <code>true</code> give stacking habilities to the Dialog."
      },
      "strings": {
       "!type": "+Object",
       "!doc": "Collection of strings used to label elements of the Dialogs UI."
      },
      "alignToViewport": {
       "!type": "fn(int: ?, int: ?)",
       "!doc": "Aligns the Dialog to the viewport."
      },
      "_afterFocusOnChange": {
       "!type": "fn()",
       "!doc": "Default function called when focusOn Attribute is changed. Remove existing listeners and create new listeners."
      },
      "_attachUIHandlesModal": {
       "!type": "fn()",
       "!doc": "Attaches UI Listeners for \"clickoutside\" and \"focusoutside\" on the widget. When these events occur, and the widget is modal, focus is shifted back onto the widget."
      },
      "_detachUIHandlesModal": {
       "!type": "fn()",
       "!doc": "Detaches all UI Listeners that were set in _attachUIHandlesModal from the widget."
      },
      "_focus": {
       "!type": "fn()",
       "!doc": "Provides mouse and tab focus to the widgets bounding box."
      }
     },
     "Dialog.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Dialog."
     },
     "Dialog.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "DialogManager": {
     "!type": "fn(config: +Object) -> +_yui.aui_dialog.DialogManager",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayManager.prototype",
      "closeByChild": {
       "!type": "fn(child: +_yui.aui_node.Node) -> +aui_dialog.Dialog",
       "!doc": "<p>Invoke the <a href=\"Dialog.html#method_close\">close</a> method from\nthe Dialog which contains the <code>child</code> element.</p>\n\nExample:\n\n<pre><code>A.DialogManager.closeByChild(#dialogContent1);</code></pre>"
      },
      "findByChild": {
       "!type": "fn(child: +_yui.aui_node.Node) -> +Widget",
       "!doc": "Find the <a href=\"Widget.html\">Widget</a> instance based on a child\nelement."
      },
      "refreshByChild": {
       "!type": "fn(child: +_yui.aui_node.Node)",
       "!doc": "<p>Invoke the <a href=\"IOPlugin.html#method_start\">start</a> method\nfrom the <a href=\"IOPlugin.html\">IOPlugin</a> plugged on this Dialog\ninstance. If there is no IOPlugin plugged it does nothing.</p>\n\nExample:\n\n<pre><code>A.DialogManager.refreshByChild(#dialogContent1);</code></pre>"
      }
     }
    }
   },
   "aui_editable": {
    "Editable": {
     "!type": "fn(config: +Object) -> +_yui.aui_editable.Editable",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "cancelButton": {
       "!type": "string",
       "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\ncancelButton."
      },
      "contentText": {
       "!type": "string",
       "!doc": "Content text."
      },
      "eventType": {
       "!type": "string",
       "!doc": "Event type to initialize the editable."
      },
      "formatInput": {
       "!type": "fn()",
       "!doc": "Function to format the input text displayed on the input."
      },
      "formatOutput": {
       "!type": "fn()",
       "!doc": "Function to format the output text displayed on the input."
      },
      "icons": {
       "!type": "+Array",
       "!doc": "Array with icons for the <a href=\"Toolbar.html\">Toolbar</a>."
      },
      "inputType": {
       "!type": "string",
       "!doc": "Type of the input used to edit the <a\nhref=\"Editable.html#config_node\">node</a>."
      },
      "node": {
       "!type": "+aui_node.Node",
       "!doc": "Node to setup the editable."
      },
      "renderTo": {
       "!type": "string",
       "!doc": "Node to render the editable."
      },
      "saveButton": {
       "!type": "string",
       "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\nsaveButton."
      },
      "cancel": {
       "!type": "fn()",
       "!doc": "Cancel the editable. Return to the original state."
      },
      "save": {
       "!type": "fn()",
       "!doc": "Save the editable. Fires the\n<a href=\"Editable.html#event_save\">save</a> event."
      }
     },
     "Editable.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Editable.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Editable."
     }
    }
   },
   "aui_image_viewer": {
    "ImageViewer": {
     "!type": "fn(config: +Object) -> +_yui.aui_image_viewer.ImageViewer",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "anim": {
       "!type": "bool",
       "!doc": "If <code>true</code> the navigation is animated."
      },
      "caption": {
       "!type": "string",
       "!doc": "The caption of the displayed image."
      },
      "captionFromTitle": {
       "!type": "bool",
       "!doc": "If <code>true</code> the <a\nhref=\"ImageViewer.html#config_caption\">caption</a> will be pulled\nfrom the title DOM attribute."
      },
      "centered": {
       "!type": "bool",
       "!doc": "If <code>true</code> the Overlay with the image will be positioned\non the center of the viewport."
      },
      "currentIndex": {
       "!type": "number",
       "!doc": "Index of the current image."
      },
      "image": {
       "!type": "+aui_node.Node",
       "!doc": "Image node element used to load the images."
      },
      "imageAnim": {
       "!type": "+Object",
       "!doc": "Configuration attributes passed to the <a href=\"Anim.html\">Anim</a>\nclass."
      },
      "infoTemplate": {
       "!type": "string",
       "!doc": "String template used to display the information."
      },
      "links": {
       "!type": "string",
       "!doc": "Selector or NodeList containing the links where the ImageViewer\nextracts the information to generate the thumbnails."
      },
      "loading": {
       "!type": "bool",
       "!doc": "Whether the image is during a loading state."
      },
      "modal": {
       "!type": "bool",
       "!doc": "Displays the modal <a href=\"OverlayMask.html\">OverlayMask</a> on\nthe viewport. Set to <code>false</code> to disable."
      },
      "preloadAllImages": {
       "!type": "fn()",
       "!doc": "Preload all images."
      },
      "showClose": {
       "!type": "bool",
       "!doc": "Show close icon control."
      },
      "showArrows": {
       "!type": "bool",
       "!doc": "Show the arrow controls."
      },
      "totalLinks": {
       "!type": "bool",
       "!doc": "Helper attribute to get the <code>size</code> of the <a\nhref=\"ImageViewer.html#config_links\">links</a> NodeList."
      },
      "arrowLeftEl": {
       "!type": "+aui_node.Node",
       "!doc": "The element to be used as arrow left."
      },
      "arrowRightEl": {
       "!type": "+aui_node.Node",
       "!doc": "The element to be used as arrow right."
      },
      "captionEl": {
       "!type": "+aui_node.Node",
       "!doc": "The element to be used as caption."
      },
      "closeEl": {
       "!type": "+aui_node.Node",
       "!doc": "The element to be used as close."
      },
      "infoEl": {
       "!type": "+aui_node.Node",
       "!doc": "The element to be used as info."
      },
      "loader": {
       "!type": "+aui_node.Node",
       "!doc": "HTML element to house the <code>img</code> which is being loaded."
      },
      "loadingEl": {
       "!type": "+aui_node.Node",
       "!doc": "The element to be used as loading."
      },
      "maxHeight": {
       "!type": "number",
       "!doc": "The maximum height of the element"
      },
      "maxWidth": {
       "!type": "number",
       "!doc": "The maximum width of the element"
      },
      "close": {
       "!type": "fn()",
       "!doc": "Close the ImageViewer."
      },
      "getLink": {
       "!type": "fn(currentIndex: number) -> +aui_node.Node",
       "!doc": "Get the Node reference to the <code>currentIndex</code> element from\nthe <a href=\"ImageViewer.html#config_links\">links</a>."
      },
      "getCurrentLink": {
       "!type": "fn() -> +aui_node.Node",
       "!doc": "Get the current loaded node link reference."
      },
      "loadImage": {
       "!type": "fn(src: string)",
       "!doc": "Load an image <code>src</code> on the ImageViewer."
      },
      "hasLink": {
       "!type": "fn(currentIndex: number) -> bool",
       "!doc": "Check if there is a node reference for the <code>currentIndex</code>."
      },
      "hasNext": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a next element to navigate."
      },
      "hasPrev": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a previous element to navigate."
      },
      "hideControls": {
       "!type": "fn()",
       "!doc": "Hide all UI controls (i.e., arrows, close icon etc)."
      },
      "hideMask": {
       "!type": "fn()",
       "!doc": "Hide the <a href=\"OverlayMask.html\">OverlayMask</a> used when <a\nhref=\"ImageViewer.html#config_modal\">modal</a> is <code>true</code>."
      },
      "next": {
       "!type": "fn()",
       "!doc": "Load the previous image."
      },
      "preloadImage": {
       "!type": "fn(currentIndex: number)",
       "!doc": "Preload an image based on its <code>index</code>."
      },
      "showLoading": {
       "!type": "fn()",
       "!doc": "Show the loading icon."
      },
      "showMask": {
       "!type": "fn()",
       "!doc": "Show the the OverlayMask used on the <a\nhref=\"ImageViewer.html#config_modal\">modal</a>."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Show the ImageViewer UI."
      }
     },
     "ImageViewer.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ImageViewer.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ImageViewer."
     }
    },
    "ImageGallery": {
     "!type": "fn(config: +Object) -> +_yui.aui_image_viewer.ImageGallery",
     "prototype": {
      "!proto": "_yui.aui_image_viewer.ImageViewer.prototype",
      "autoPlay": {
       "!type": "bool",
       "!doc": "If <code>true</code> the slide show will be played when the\nImageGallery is displayed."
      },
      "delay": {
       "!type": "number",
       "!doc": "Delay in milliseconds to change to the next image."
      },
      "paginator": {
       "!type": "+Object",
       "!doc": "<a href=\"Paginator.html\">Paginator</a> configuration Object. The\n<code>Paginator</code> handles the thumbnails control."
      },
      "paginatorEl": {
       "!type": "+aui_node.Node",
       "!doc": "Element which contains the <a href=\"Paginator.html\">Paginator</a>\nwith the thumbnails."
      },
      "paginatorInstance": {
       "!type": "+aui_paginator.Paginator",
       "!doc": "Stores the <a href=\"Paginator.html\">Paginator</a> instance."
      },
      "paused": {
       "!type": "bool",
       "!doc": "If <code>true</code> the slide show is paused."
      },
      "pausedLabel": {
       "!type": "string",
       "!doc": "Label to display when the slide show is paused."
      },
      "playing": {
       "!type": "bool",
       "!doc": "If <code>true</code> the slide show is playing."
      },
      "playingLabel": {
       "!type": "string",
       "!doc": "Label to display when the slide show is playing."
      },
      "repeat": {
       "!type": "bool",
       "!doc": "Restart the navigation when reach the last element."
      },
      "showPlayer": {
       "!type": "bool",
       "!doc": "Show the player controls (i.e., pause and show buttons)."
      },
      "toolbar": {
       "!type": "+Toolbar constructor.",
       "!doc": "<a href=\"Toolbar.html\">Toolbar</a> with a play, and pause buttons."
      },
      "useOriginalImage": {
       "!type": "bool",
       "!doc": "If <code>true</code> will use the original image as thumbnails."
      },
      "hidePaginator": {
       "!type": "fn()",
       "!doc": "Hide the <a href=\"Paginator.html\">Paginator</a> with the thumbnails\nlist."
      },
      "pause": {
       "!type": "fn()",
       "!doc": "Pause the slide show."
      },
      "play": {
       "!type": "fn()",
       "!doc": "Play the slide show."
      },
      "show": {
       "!type": "fn()",
       "!doc": "<p>Show the ImageGallery.</p>\n\n<p><strong>NOTE:</strong>Overloads the <a\nhref=\"ImageViewer.html\">ImageViewer</a> show method to not loadImage, the\nchangeRequest now is responsible to do that if we invoke the superclass\nshow method its loading the image, and the changeRequest loads again,\navoiding double request.</p>"
      },
      "showPaginator": {
       "!type": "fn()",
       "!doc": "Show the <a href=\"Paginator.html\">Paginator</a> with the thumbnails\nlist."
      }
     },
     "ImageGallery.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ImageGallery.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ImageGallery."
     }
    }
   },
   "aui_io": {
    "A": {
     "Plugin": {
      "IO": {
       "!type": "fn(config: +Object) -> +_yui.aui_io.A.Plugin.IO",
       "prototype": {
        "!proto": "_yui.aui_io.IORequest.prototype",
        "node": {
         "!type": "+aui_node.Node",
         "!doc": "Plug IO in any object we want, the setContent will use the node to\nset the content."
        },
        "failureMessage": {
         "!type": "string",
         "!doc": "Message to be set on the content when the transaction fails."
        },
        "loadingMask": {
         "!type": "+Object",
         "!doc": "Options passed to the <a href=\"LoadingMask.html\">LoadingMask</a>."
        },
        "parseContent": {
         "!type": "bool",
         "!doc": "If true the <a href=\"ParseContent.html\">ParseContent</a> plugin\nwill be plugged to the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "showLoading": {
         "!type": "fn()",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_show\">OverlayMask show</a> method."
        },
        "section": {
         "!type": "string",
         "!doc": "Section where the content will be set in case you are plugging it\non a instace of <a href=\"WidgetStdMod.html\">WidgetStdMod</a>."
        },
        "type": {
         "!type": "string",
         "!doc": "Type of the <code>instance</code> we are pluggin the A.Plugin.IO.\nCould be a Node, or a Widget."
        },
        "where": {
         "!type": "string",
         "!doc": "Where to insert the content, AFTER, BEFORE or REPLACE. If youre plugging a Node, there is a fourth option called OUTER that will not only replace the entire node itself. This is different from REPLACE, in that REPLACE will replace the *contents* of the node, OUTER will replace the entire Node itself."
        },
        "hideLoading": {
         "!type": "fn()",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_hide\">OverlayMask hide</a> method."
        },
        "setContent": {
         "!type": "fn()",
         "!doc": "Set the content of the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "start": {
         "!type": "fn()",
         "!doc": "Overload to the <a href=\"IORequest.html#method_start\">IORequest\nstart</a> method. Check if the <code>host</code> is already rendered,\notherwise wait to after render phase and to show the LoadingMask."
        }
       },
       "A.Plugin.IO.NAME": {
        "!type": "string",
        "!doc": "Static property provides a string to identify the class."
       },
       "A.Plugin.IO.NS": {
        "!type": "string",
        "!doc": "Static property provides a string to identify the namespace."
       },
       "A.Plugin.IO.ATTRS": {
        "!type": "+Object",
        "!doc": "Static property used to define the default attribute\nconfiguration for the A.Plugin.IO."
       }
      }
     },
     "io": {
      "!type": "fn()",
      "prototype": {
       "A.io.request": {
        "!type": "fn(uri: string, config: +Object) -> +aui_io.IORequest",
        "!doc": "Static method to invoke the <a href=\"IORequest.html\">IORequest</a>. Likewise <a href=\"io.html#method_io\">io</a>."
       }
      }
     }
    },
    "IORequest": {
     "!type": "fn(config: +Object) -> +_yui.aui_io.IORequest",
     "prototype": {
      "!proto": "Plugin.Base.prototype",
      "autoLoad": {
       "!type": "bool",
       "!doc": "If <code>true</code> invoke the\n<a href=\"IORequest.html#method_start\">start</a> method automatically,\ninitializing the IO transaction."
      },
      "cache": {
       "!type": "bool",
       "!doc": "If <code>false</code> the current timestamp will be appended to the\nurl, avoiding the url to be cached."
      },
      "dataType": {
       "!type": "string",
       "!doc": "The type of the request (i.e., could be xml, json, javascript, text)."
      },
      "responseData": {
       "!type": "string",
       "!doc": "This is a normalized attribute for the response data. Its useful\nto retrieve the correct type for the\n<a href=\"IORequest.html#config_dataType\">dataType</a> (i.e., in json\nrequests the <code>responseData</code>) is a JSONObject."
      },
      "uri": {
       "!type": "string",
       "!doc": "URI to be requested using AJAX."
      },
      "active": {
       "!type": "bool",
       "!doc": "Whether the transaction is active or not."
      },
      "cfg": {
       "!type": "string",
       "!doc": "Object containing all the\n<a href=\"io.html#configattributes\">IO Configuration Attributes</a>.\nThis Object is passed to the <code>A.io</code> internally."
      },
      "transaction": {
       "!type": "+Object",
       "!doc": "Stores the IO Object of the current transaction."
      },
      "arguments": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "context": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "data": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "form": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "headers": {
       "!type": "+Object",
       "!doc": "Set the correct ACCEPT header based on the dataType."
      },
      "method": {
       "!type": "string",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "selector": {
       "!type": "string",
       "!doc": "A selector to be used to query against the response of the\nrequest. Only works if the response is XML or HTML."
      },
      "sync": {
       "!type": "bool",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "timeout": {
       "!type": "number",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "xdr": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "start": {
       "!type": "fn()",
       "!doc": "Starts the IO transaction. Used to refresh the content also."
      },
      "stop": {
       "!type": "fn()",
       "!doc": "Stops the IO transaction."
      }
     },
     "IORequest.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "IORequest.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the IORequest."
     }
    }
   },
   "aui_live_search": {
    "LiveSearch": {
     "!type": "fn(config: +Object) -> +_yui.aui_live_search.LiveSearch",
     "prototype": {
      "!proto": "Base.prototype",
      "data": {
       "!type": "fn()",
       "!doc": "<p>Function to extract the content from the node for the indexing. The\ndefault uses the <code>node.html()</code>. In case if you need to\nindex the id of the nodes, here goes one example:</p>\n\nExample indexing the id of the node instead of the HTML:\n\n<pre><code>function(node) {\n return node.attr(id);\n}\n</code></pre>"
      },
      "delay": {
       "!type": "number",
       "!doc": "Number of milliseconds the filter will be applied to the node list\nafter the user stop typing."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Function to be executed to hide the node when the data of that node\nnot matches with the filter."
      },
      "index": {
       "!type": "+Array",
       "!doc": "Index for the nodes content."
      },
      "input": {
       "!type": "+aui_node.Node",
       "!doc": "The <code>value</code> of this input node is used to filter the\nresults."
      },
      "matchRegex": {
       "!type": "+RegExp",
       "!doc": "The input <code>value</code> need to matches with this RegExp to be\naccept as a filter (i.e., in order to accept only digits you\ncould use /\\d+/g)."
      },
      "nodes": {
       "!type": "+aui_node.Node",
       "!doc": "Nodes to be indexed for the filtering."
      },
      "searchValue": {
       "!type": "string",
       "!doc": "The text value to search for"
      },
      "show": {
       "!type": "fn()",
       "!doc": "Function to be executed to show the node when the data of that node\nmatches with the filter."
      },
      "filter": {
       "!type": "fn(query: string) -> +Array",
       "!doc": "Filter the <a href=\"LiveSearch.html#config_nodes\">nodes</a> based on\nthe input value."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!doc": "Refreshes the <a href=\"LiveSearch.html#config_index\">index</a>."
      },
      "search": {
       "!type": "fn(value: string)",
       "!doc": "Searches for the user supplied value."
      }
     },
     "LiveSearch.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "LiveSearch.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LiveSearch."
     }
    }
   },
   "aui_loading_mask": {
    "LoadingMask": {
     "!type": "fn(config: +Object) -> +_yui.aui_loading_mask.LoadingMask",
     "prototype": {
      "!proto": "Plugin.Base.prototype",
      "messageEl": {
       "!type": "string",
       "!doc": "Node element to display the message."
      },
      "strings": {
       "!type": "+Object",
       "!doc": "Strings used on the LoadingMask. See\n<a href=\"Widget.html#method_strings\">strings</a>."
      },
      "target": {
       "!type": "+aui_node.Node",
       "!doc": "Node where the mask will be positioned and re-dimensioned."
      },
      "centerMessage": {
       "!type": "fn()",
       "!doc": "Center the\n<a href=\"LoadingMask.html#config_messageEl\">messageEl</a> with the\n<a href=\"LoadingMask.html#config_target\">target</a> node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>refreshMask</code> method."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>hide</code> method."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>show</code> method."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>toggle</code> method."
      }
     },
     "LoadingMask.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "LoadingMask.NS": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "LoadingMask.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LoadingMask."
     }
    }
   },
   "aui_nested_list": {
    "NestedList": {
     "!type": "fn(config: +Object) -> +_yui.aui_nested_list.NestedList",
     "prototype": {
      "!proto": "Base.prototype"
     },
     "NestedList.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "NestedList.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the NestedList."
     }
    }
   },
   "aui_node": {
    "A": {
     "Node": {
      "!type": "fn() -> +_yui.aui_node.A.Node",
      "prototype": {
       "ancestors": {
        "!type": "fn(selector: string) -> +NodeList",
        "!doc": "<p>Returns the current ancestors of the node element filtered by a className.\nThis is an optimized method for finding ancestors by a specific CSS class name.</p>\n\nExample:\n\n<pre><code>\nA.one(#nodeId).ancestorsByClassName(aui-helper-hidden);\n</code></pre>"
       },
       "appendTo": {
        "!type": "fn(selector: +_yui.aui_node.Node) -> !this",
        "!doc": "<p>Insert the node instance to the end of the <code>selector</code>\nelement.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// using another Node instance\nvar body = A.one(body);\nnode.appendTo(body);\n// using a CSS selector\nnode.appendTo(#container);\n</code></pre>"
       },
       "attr": {
        "!type": "fn(name: string, value: string) -> string",
        "!doc": "<p>Get or Set the value of an attribute for the first element in the\nset of matched elements. If only the <code>name</code> is passed it\nworks as a getter.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.attr(title, Setting a new title attribute);\n// Alert the value of the title attribute: Setting a new title attribute\nalert( node.attr(title) );\n</code></pre>"
       },
       "clone": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Normalizes the behavior of cloning a node, which by default should not clone\nthe events that are attached to it.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.clone().appendTo(body);\n</code></pre>"
       },
       "center": {
        "!type": "fn(val: +Array) -> !this",
        "!doc": "<p>Centralize the current Node instance with the passed\n<code>val</code> Array, Node, String, or Region, if not specified, the body will be\nused.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// Center the <code>node</code> with the <code>#container</code>.\nnode.center(#container);\n</code></pre>"
       },
       "empty": {
        "!type": "fn() -> !this",
        "!doc": "<p>This method removes not only child (and other descendant) elements,\nbut also any text within the set of matched elements. This is because,\naccording to the DOM specification, any string of text within an element\nis considered a child node of that element.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.empty();\n</code></pre>"
       },
       "getDOM": {
        "!type": "fn() -> +HTMLNode",
        "!doc": "Retrieves the DOM node bound to a Node instance. See\n<a href=\"Node.html#method_getDOMNode\">getDOMNode</a>."
       },
       "getBorderWidth": {
        "!type": "fn(sides: string) -> number",
        "!doc": "Return the combined width of the border for the specified sides."
       }
      }
     },
     "NodeList": {
      "!type": "fn() -> +_yui.aui_node.A.NodeList",
      "prototype": {
       "all": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_all\">Node all</a>."
       },
       "first": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Returns the first element in the node list collection."
       },
       "getDOM": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_getDOM\">Node getDOM</a>."
       },
       "last": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Returns the last element in the node list collection."
       },
       "one": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_one\">Node one</a>."
       },
       "getBody": {
        "!type": "fn()",
        "!doc": "Get the body node. Shortcut to <code>A.one(body)</code>."
       },
       "getDoc": {
        "!type": "fn()",
        "!doc": "Get the document node. Shortcut to <code>A.one(document)</code>."
       },
       "getWin": {
        "!type": "fn()",
        "!doc": "Get the window node. Shortcut to <code>A.one(window)</code>."
       }
      }
     },
     "HTML5": {
      "!type": "fn()",
      "prototype": {
       "IECreateFix": {
        "!type": "fn(frag: +_yui.aui_node.Node, content: string) -> +aui_node.Node",
        "!doc": "Receives a <code>frag</code> and a HTML content. This method\nshivs the HTML5 nodes appended to a Node or fragment which is not\non the document yet."
       }
      }
     }
    },
    "Node": {
     "!type": "fn()",
     "prototype": {
      "getCenterXY": {
       "!type": "fn() -> +Array",
       "!doc": "Gets the current center position of the node in page coordinates."
      },
      "getMargin": {
       "!type": "fn(sides: string) -> number",
       "!doc": "Return the combined size of the margin for the specified sides."
      },
      "getPadding": {
       "!type": "fn(sides: string) -> number",
       "!doc": "Return the combined width of the border for the specified sides."
      },
      "guid": {
       "!type": "fn(prefix: string) -> string",
       "!doc": "Set the id of the Node instance if the object does not have one. The\ngenerated id is based on a guid created by the\n<a href=\"YUI.html#method_stamp\">stamp</a> method."
      },
      "hover": {
       "!type": "fn(overFn: string, outFn: string) -> +aui_node.Node",
       "!doc": "Create a hover interaction."
      },
      "html": {
       "!type": "fn(value: string)",
       "!doc": "<p>Get or Set the HTML contents of the node. If the <code>value</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.html(Setting new HTML);\n// Alert the value of the current content\nalert( node.html() );\n</code></pre>"
      },
      "undefined": {
       "!type": "fn() -> string",
       "!doc": "Gets the outerHTML of a node, which islike innerHTML, except that it\nactually contains the HTML of the node itself."
      },
      "placeAfter": {
       "!type": "fn(newNode: +_yui.aui_node.Node) -> !this",
       "!doc": "<p>Inserts a <code>newNode</code> after the node instance (i.e., as the next\nsibling). If the reference node has no parent, then does nothing.</p>\n\nExample:\n\n<pre><code>var titleNode = A.one(#titleNode);\nvar descriptionNode = A.one(#descriptionNode);\n// the description is usually shown after the title\ntitleNode.placeAfter(descriptionNode);\n</code></pre>"
      },
      "placeBefore": {
       "!type": "fn(newNode: +_yui.aui_node.Node) -> !this",
       "!doc": "<p>Inserts a <code>newNode</code> before the node instance (i.e., as the previous\nsibling). If the reference node has no parent, then does nothing.</p>\n\nExample:\n\n<pre><code>var descriptionNode = A.one(#descriptionNode);\nvar titleNode = A.one(#titleNode);\n// the title is usually shown before the description\ndescriptionNode.placeBefore(titleNode);\n</code></pre>"
      },
      "prependTo": {
       "!type": "fn(selector: +_yui.aui_node.Node) -> !this",
       "!doc": "<p>Inserts the node instance to the begining of the <code>selector</code>\nnode (i.e., insert before the <code>firstChild</code> of the\n<code>selector</code>).</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.prependTo(body);\n</code></pre>"
      },
      "radioClass": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "Add one or more CSS classes to an element and remove the class(es)\nfrom the siblings of the element."
      },
      "resetId": {
       "!type": "fn(prefix: string) -> !this",
       "!doc": "Generate an unique identifier and reset the id attribute of the node\ninstance using the new value. Invokes the\n<a href=\"Node.html#method_guid\">guid</a>."
      },
      "selectText": {
       "!type": "fn(start: number, end: number)",
       "!doc": "Selects a substring of text inside of the input element."
      },
      "selectable": {
       "!type": "fn() -> !this",
       "!doc": "Enables text selection for this element (normalized across browsers)."
      },
      "swallowEvent": {
       "!type": "fn(eventName: string, preventDefault: bool) -> !this",
       "!doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the\ndefault action.</p>\n\nExample:\n\n<pre><code>var anchor = A.one(a#anchorId);\nanchor.swallowEvent(click);\n</code></pre>"
      },
      "text": {
       "!type": "fn(text: string)",
       "!doc": "<p>Get or Set the combined text contents of the node instance,\nincluding its descendants. If the <code>text</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.text(Setting new text content);\n// Alert the value of the current content\nalert( node.text() );\n</code></pre>"
      },
      "toggle": {
       "!type": "fn(on: bool, callback: fn()) -> !this",
       "!doc": "<p>Displays or hide the node instance.</p>\n\n<p><string>NOTE:</string> This method assume that your node were hidden\nbecause of the aui-helper-hidden css class were being used. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "unselectable": {
       "!type": "fn() -> !this",
       "!doc": "Disables text selection for this element (normalized across browsers)."
      },
      "val": {
       "!type": "fn(value: string)",
       "!doc": "<p>Get or Set the value attribute of the node instance. If the\n<code>value</code> is passed its set the value of the element,\notherwise it works as a getter for the current value.</p>\n\nExample:\n\n<pre><code>var input = A.one(#inputId);\ninput.val(Setting new input value);\n// Alert the value of the input\nalert( input.val() );\n</code></pre>"
      },
      "_getBoxStyleAsNumber": {
       "!type": "fn(sides: string, map: string) -> number",
       "!doc": "Return the combined size of the box style for the specified sides."
      },
      "hide": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "<p>Hide the node adding a css class on it. If <code>cssClass</code> is not\npassed as argument, the className aui-helper-hidden will be used by\ndefault.</p>\n\n<p><string>NOTE:</string> This method assume that your node were visible\nbecause the absence of aui-helper-hidden css class. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "show": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "<p>Show the node removing a css class used to hide it. Use the same\nclassName added using the <a href=\"A.Node.html#method_hide\">hide</a>\nmethod. If <code>cssClass</code> is not passed as argument, the\nclassName aui-helper-hidden will be used by default.</p>\n\n<p><string>NOTE:</string> This method assume that your node were hidden\nbecause of the aui-helper-hidden css class were being used. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "width": {
       "!type": "fn() -> number",
       "!doc": "Returns the width of the content, not including\nthe padding, border or margin. If a width is passed,\nthe nodes overall width is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.width(); //returns content width\nnode.width(100); // sets box width\n</code></pre>"
      },
      "height": {
       "!type": "fn() -> number",
       "!doc": "Returns the height of the content, not including\nthe padding, border or margin. If a height is passed,\nthe nodes overall height is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.height(); //returns content height\nnode.height(100); // sets box height\n</code></pre>"
      },
      "innerWidth": {
       "!type": "fn() -> number",
       "!doc": "Returns the size of the box from inside of the border,\nwhich is the offsetWidth plus the padding on the left and right.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerWidth();\n</code></pre>"
      },
      "innerHeight": {
       "!type": "fn() -> number",
       "!doc": "Returns the size of the box from inside of the border,\nwhich is offsetHeight plus the padding on the top and bottom.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerHeight();\n</code></pre>"
      },
      "outerWidth": {
       "!type": "fn() -> number",
       "!doc": "Returns the outer width of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerWidth();\nnode.outerWidth(true); // includes margin\n</code></pre>"
      },
      "outerHeight": {
       "!type": "fn() -> number",
       "!doc": "Returns the outer height of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerHeight();\nnode.outerHeight(true); // includes margin\n</code></pre>"
      }
     }
    }
   },
   "aui_overlay": {
    "OverlayContextPanel": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayContextPanel",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype",
      "anim": {
       "!type": "+Object",
       "!doc": "Enable or disable the animation for hide and show. Used as the\n<a href=\"Anim.html\">Anim</a> configuration attributes.\n\n<pre><code>anim: {\n show: {\n \tduration: .9\n },\n hide: {\n \tduration: .2\n }\n}\n</code></pre>"
      },
      "arrow": {
       "!type": "string",
       "!doc": "Position where the arrow will be placed. See\n<a href=\"OverlayContextPanel.html#config_showArrow\">showArrow</a>. If its\nnot set, it will get the value set on the\n<a href=\"OverlayContext.html#config_align\">align</a> point. Here is a\nlist of valid arrows bc, bl, br, cc, lb, lc, lt, rb,\nrc, rl."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_hideOn\">hideOn</a>."
      },
      "showOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">showOn</a>."
      },
      "showArrow": {
       "!type": "bool",
       "!doc": "If true the OverlayContextPanel will show an arrow positioned on the\n<a href=\"OverlayContextPanel.html#config_arrow\">arrow</a> point."
      },
      "stack": {
       "!type": "bool",
       "!doc": "Gives stacking habilities to the OverlayContextPanel."
      },
      "align": {
       "!type": "fn(node: +_yui.aui_node.Node, points: [+Array])",
       "!doc": "Aligns the OverlayContextPanel to the provided node (or viewport) using the\nprovided points. Inherited from\n<a href=\"Overlay.html#method_align\">Overlay</a>."
      },
      "fixPointerColor": {
       "!type": "fn()",
       "!doc": "OverlayContextPanel uses a imageless arrow, which involves some CSS technics.\nThis method is meant to fix the color of the borders of the arrow."
      },
      "getAlignPoint": {
       "!type": "fn() -> string",
       "!doc": "Normalize the align point value. The align point cc is not a valid\nposition for the arrow and then its normalized to the bc point."
      },
      "hide": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Hides the OverlayContextPanel."
      }
     },
     "OverlayContextPanel.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContextPanel.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContextPanel."
     }
    },
    "OverlayContext": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayContext",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "align": {
       "!type": "+Object",
       "!doc": "Inherited from <a href=\"Overlay.html#config_align\">Overlay</a>."
      },
      "cancellableHide": {
       "!type": "bool",
       "!doc": "Cancel auto hide delay if the user interact with the Overlay\n(focus, click, mouseover)"
      },
      "currentNode": {
       "!type": "+aui_node.Node",
       "!doc": "OverlayContext allow multiple elements to be the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>, the\ncurrentNode stores the current active one."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "The event which is responsible to hide the OverlayContext."
      },
      "hideOnDocumentClick": {
       "!type": "bool",
       "!doc": "If true the instance is registered on the\n<a href=\"OverlayContextManager.html\">OverlayContextManager</a> static\nclass and will be hide when the user click on document."
      },
      "hideDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds after the hide method is invoked to hide the\nOverlayContext."
      },
      "showOn": {
       "!type": "string",
       "!doc": "The event which is responsible to show the OverlayContext."
      },
      "showDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds after the show method is invoked to show the\nOverlayContext."
      },
      "trigger": {
       "!type": "+aui_node.Node",
       "!doc": "Node, NodeList or Selector which will be used as trigger elements\nto show or hide the OverlayContext."
      },
      "useARIA": {
       "!type": "bool",
       "!doc": "True if Overlay should use ARIA plugin"
      },
      "visible": {
       "!type": "bool",
       "!doc": "If true the OverlayContext is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Shows the OverlayContext."
      },
      "toggle": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Toggles visibility of the OverlayContext."
      },
      "clearIntervals": {
       "!type": "fn()",
       "!doc": "Clear the intervals to show or hide the OverlayContext. See\n<a href=\"OverlayContext.html#config_hideDelay\">hideDelay</a> and\n<a href=\"OverlayContext.html#config_showDelay\">showDelay</a>."
      },
      "refreshAlign": {
       "!type": "fn()",
       "!doc": "Refreshes the alignment of the OverlayContext with the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a>. See\nalso <a href=\"OverlayContext.html#config_align\">align</a>."
      },
      "updateCurrentNode": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Update the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a> with the\n<a href=\"OverlayContext.html#config_align\">align</a> node or the\nevent.currentTarget and in last case with the first item of the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>."
      }
     },
     "OverlayContext.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContext.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContext."
     }
    },
    "OverlayManager": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayManager",
     "prototype": {
      "!proto": "Base.prototype",
      "zIndexBase": {
       "!type": "number",
       "!doc": "The zIndex base to be used on the stacking for all overlays\nregistered on the OverlayManager."
      },
      "bringToTop": {
       "!type": "fn(overlay: +Overlay)",
       "!doc": "Set the passed overlay zIndex to the highest value."
      },
      "register": {
       "!type": "fn(overlay: +Overlay) -> +Array",
       "!doc": "Register the passed <a href=\"Overlay.html\">Overlay</a> to this\nOverlayManager."
      },
      "remove": {
       "!type": "fn(overlay: +Overlay) -> +Null",
       "!doc": "Remove the passed <a href=\"Overlay.html\">Overlay</a> from this\nOverlayManager."
      },
      "each": {
       "!type": "fn(fn: fn()) -> +Null",
       "!doc": "Loop through all registered <a href=\"Overlay.html\">Overlay</a> and\nexecute a callback."
      },
      "showAll": {
       "!type": "fn()",
       "!doc": "Invoke the <a href=\"Overlay.html#method_show\">show</a> method from\nall registered Overlays."
      },
      "hideAll": {
       "!type": "fn()",
       "!doc": "Invoke the <a href=\"Overlay.html#method_hide\">hide</a> method from\nall registered Overlays."
      },
      "sortByZIndexDesc": {
       "!type": "fn(a: +Overlay, b: +Overlay) -> number",
       "!doc": "zIndex comparator. Used on Array.sort."
      }
     },
     "OverlayManager.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayManager.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayManager."
     }
    },
    "OverlayMask": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayMask",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "alignPoints": {
       "!type": "+Array",
       "!doc": "Points to align the <a href=\"Overlay.html\">Overlay</a> used as\nmask."
      },
      "background": {
       "!type": "string",
       "!doc": "Background color of the mask."
      },
      "target": {
       "!type": "+aui_node.Node",
       "!doc": "Node where the mask will be positioned and re-dimensioned. The\ndefault is the document, which means that if not specified the mask\ntakes the full screen."
      },
      "opacity": {
       "!type": "number",
       "!doc": "CSS opacity of the mask."
      },
      "shim": {
       "!type": "bool",
       "!doc": "Use shim option."
      },
      "visible": {
       "!type": "bool",
       "!doc": "If true the Overlay is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
      },
      "zIndex": {
       "!type": "number",
       "!doc": "zIndex of the OverlayMask."
      },
      "getTargetSize": {
       "!type": "fn() -> +Object",
       "!doc": "Get the size of the\n<a href=\"OverlayMask.html#config_target\">target</a>. Used to dimension\nthe mask node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!doc": "Repaint the OverlayMask UI, respecting the\n<a href=\"OverlayMask.html#config_target\">target</a> size and the\n<a href=\"OverlayMask.html#config_alignPoints\">alignPoints</a>."
      }
     },
     "OverlayMask.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayMask.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayMask."
     }
    }
   },
   "aui_paginator": {
    "Paginator": {
     "!type": "fn(config: +Object) -> +_yui.aui_paginator.Paginator",
     "prototype": {
      "!proto": "Base.prototype",
      "alwaysVisible": {
       "!type": "bool",
       "!doc": "If true the Paginator will be always visible, even when the number\nof pages is 0. To hide the paginator controls automatically when\nthere is no pages to display use <code>false</code>."
      },
      "containers": {
       "!type": "+aui_node.Node",
       "!doc": "The Paginator controls UI could be displayed in more than one\ncontainer (i.e., in the header and footer of a list). Pass a\n<a href=\"NodeList.html\">NodeList</a> or a selector to grab the\ncontainers."
      },
      "firstPageLink": {
       "!type": "+aui_node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nfirst link element."
      },
      "firstPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_firstPageLink\">firstPageLink</a> element."
      },
      "lastPageLink": {
       "!type": "+aui_node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nlast link element."
      },
      "lastPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_lastPageLink\">lastPageLink</a> element."
      },
      "maxPageLinks": {
       "!type": "number",
       "!doc": "The max number of page links to be displayed. If lower than the\ntotal number of pages they are still navigable using next and prev\nlinks."
      },
      "nextPageLink": {
       "!type": "+aui_node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nnext link element."
      },
      "nextPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_nextPageLink\">nextPageLink</a> element."
      },
      "page": {
       "!type": "number",
       "!doc": "Page to display on initial paint."
      },
      "pageContainerTemplate": {
       "!type": "string",
       "!doc": "HTML Template for the page links container."
      },
      "pageLinkContent": {
       "!type": "fn()",
       "!doc": "<p>Function which set the content of the each page element. The passed\nfunction receive as arguments the reference for the page element\nnode, the page number and the index of the page element.</p>\n\nExample:\n\n<pre><code>function(pageEl, pageNumber, index) {\n\t pageEl.html(pageNumber);\n\t}</code></pre>"
      },
      "pageLinkTemplate": {
       "!type": "string",
       "!doc": "HTML Template for the link elements."
      },
      "pageReportEl": {
       "!type": "string",
       "!doc": "Node element to display the page report (i.e., (1 of 100))."
      },
      "pageReportLabelTemplate": {
       "!type": "string",
       "!doc": "Template for the\n<a href=\"Paginator.html#config_pageReportEl\">pageReportEl</a> content.\nNote the placeholders for the page {page} and the total pages\n{totalPages}."
      },
      "prevPageLink": {
       "!type": "+aui_node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nprev link element."
      },
      "prevPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_prevPageLink\">prevPageLink</a> element."
      },
      "rowsPerPage": {
       "!type": "number",
       "!doc": "Number of records constituting a \"page\"."
      },
      "rowsPerPageEl": {
       "!type": "+aui_node.Node",
       "!doc": "Node element to display the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>."
      },
      "rowsPerPageOptions": {
       "!type": "+Array",
       "!doc": "Array to be displayed on the generated HTML Select element with the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>\ninformation. (i.e., [1,3,5,7], will display these values on the\nselect)"
      },
      "state": {
       "!type": "+Object",
       "!doc": "Generates information to the <code>changeRequest</code> event. See\n<a href=\"Paginator.html#method_changeRequest\">changeRequest</a>."
      },
      "template": {
       "!type": "string",
       "!doc": "Template used to render controls. The string will be used as\ninnerHTML on all specified container nodes. Bracketed keys (e.g.\n{pageLinks}) in the string will be replaced with an instance of the\nso named ui component."
      },
      "total": {
       "!type": "number",
       "!doc": "Total number of records to paginate through."
      },
      "totalEl": {
       "!type": "string",
       "!doc": "Node element to display the total information."
      },
      "totalLabel": {
       "!type": "string",
       "!doc": "The label markup to the total information."
      },
      "totalPages": {
       "!type": "number",
       "!doc": "Number of pages. Calculated based on the\n<a href=\"Paginator.html#config_total\">total</a> divided by the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>."
      },
      "calculateRange": {
       "!type": "fn(name: +Type) -> +Object",
       "!doc": "Create a range to display on the pageLinks, keep the current page on\ncenter."
      },
      "changeRequest": {
       "!type": "fn()",
       "!doc": "Fires <a href=\"Paginator.html#event_changeRequest\">changeRequest</a>\nevent. This is the most important event because its responsible to\nupdate the UI, invoked <code>.setState(newState)</code> to update the\nUI."
      },
      "eachContainer": {
       "!type": "fn(fn: fn())",
       "!doc": "Loop through all\n<a href=\"Paginator.html#config_containers\">containers</a> and execute the\npassed callback."
      },
      "hasNextPage": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a next page."
      },
      "hasPage": {
       "!type": "fn(page: number) -> bool",
       "!doc": "Check if the <code>page</code> exists."
      },
      "hasPrevPage": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a previous page."
      },
      "setState": {
       "!type": "fn(v: +Object)",
       "!doc": "Public setter for <a href=\"Paginator.html#config_state\">state</a>."
      }
     },
     "Paginator.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Paginator.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Paginator."
     }
    }
   },
   "aui_panel": {
    "Panel": {
     "!type": "fn(config: +Object) -> +_yui.aui_panel.Panel",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "collapsed": {
       "!type": "bool",
       "!doc": "Whether the panel is displayed collapsed."
      },
      "collapsible": {
       "!type": "bool",
       "!doc": "Whether the panel is able to be collapsed."
      },
      "title": {
       "!type": "bool",
       "!doc": "The title to be displayed on the Panel."
      },
      "icons": {
       "!type": "+Array",
       "!doc": "<p>Array of <a href=\"ButtonItem.html\">ButtonItem</a> configuration objects to be displayed as icons\non the Panel title.</p>\n\nExample:\n\n<pre><code>icons: [ { icon: close, id: close } ]</code></pre>\n\nFor more information how to use this option see\n<a href=\"ButtonItem.html\">ButtonItem</a>."
      },
      "strings": {
       "!type": "+Object",
       "!doc": "Collection of strings used to label elements of the Panels UI."
      },
      "useARIA": {
       "!type": "bool",
       "!doc": "True if Panel should use ARIA plugin"
      },
      "collapse": {
       "!type": "fn()",
       "!doc": "Collapse the panel setting the\n<a href=\"Panel.html#config_collapsed\">collapsed</a> attribute to\n<code>true</code>."
      },
      "expand": {
       "!type": "fn()",
       "!doc": "Expand the panel setting the\n<a href=\"Panel.html#config_collapsed\">collapsed</a> attribute to\n<code>false</code>."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Toggle the visibility of the Panel toggling the value of the\n<a href=\"Widget.html#config_visible\">visible</a> attribute."
      },
      "toggleCollapse": {
       "!type": "fn()",
       "!doc": "Toggle the <a href=\"Panel.html#config_collapsed\">collapsed</a> value.\nExpanding and collapsing the Panel."
      }
     },
     "Panel.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Panel."
     }
    }
   },
   "aui_parse_content": {
    "ParseContent": {
     "!type": "fn(config: +Object) -> +_yui.aui_parse_content.ParseContent",
     "prototype": {
      "!proto": "Plugin.Base.prototype",
      "globalEval": {
       "!type": "fn(data: string)",
       "!doc": "Global eval the <data>data</data> passed."
      },
      "parseContent": {
       "!type": "fn(content: string) -> string",
       "!doc": "Extract the <code>script</code> tags from the string content and\nevaluate the chunks."
      }
     },
     "ParseContent.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ParseContent.NS": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "ParseContent.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ParseContent."
     }
    }
   },
   "aui_portal_layout": {
    "PortalLayout": {
     "!type": "fn(config: +Object) -> +_yui.aui_portal_layout.PortalLayout",
     "prototype": {
      "!proto": "Base.prototype"
     },
     "PortalLayout.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "PortalLayout.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the PortalLayout."
     }
    }
   },
   "aui_progressbar": {
    "ProgressBar": {
     "!type": "fn(config: +Object) -> +_yui.aui_progressbar.ProgressBar",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "height": {
       "!type": "number",
       "!doc": "Display height of the progressbar."
      },
      "label": {
       "!type": "string",
       "!doc": "Display label of the progressbar. If not specified try to query\nusing HTML_PARSER an element inside contentBox which matches\n<code>aui-progressbar-text</code> and get its innerHTML to be\nused as label."
      },
      "max": {
       "!type": "number",
       "!doc": "Represents the top value for the bar. The bar will be fully\nextended when reaching this value. Values higher than this will\nbe ignored."
      },
      "min": {
       "!type": "number",
       "!doc": "Represents the lowest value for the bar. The bar will be\ntotally collapsed when reaching this value. Values lower than\nthis will be ignored."
      },
      "orientation": {
       "!type": "string",
       "!doc": "Display orientation of the progressbar (i.e. vertical or\nhorizontal)."
      },
      "ratio": {
       "!type": "number",
       "!doc": "Calculate the ratio based on <code>max</code> and\n<code>min</code> values."
      },
      "step": {
       "!type": "number",
       "!doc": "Calculate the progressbar step based on <code>ratio</code>\nvalue."
      },
      "statusNode": {
       "!type": "string",
       "!doc": "DOM Node to display the satus bar of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-status</code>."
      },
      "textNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-text</code>."
      },
      "value": {
       "!type": "number",
       "!doc": "The value for the bar. Valid values are in between the minValue\nand maxValue attributes."
      }
     },
     "ProgressBar.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ProgressBar.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ProgressBar."
     },
     "ProgressBar.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_rating": {
    "Rating": {
     "!type": "fn(config: +Object) -> +_yui.aui_rating.Rating",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "disabled": {
       "!type": "bool",
       "!doc": "Whether the Rating is disabled or not. Disabled Ratings dont allow\nhover or click, just display selected stars."
      },
      "canReset": {
       "!type": "bool",
       "!doc": "If <code>true</code> could be reseted (i.e., have no values\nselected)."
      },
      "defaultSelected": {
       "!type": "number",
       "!doc": "The number of selected starts when the Rating render."
      },
      "elements": {
       "!type": "+NodeList",
       "!doc": "<a href=\"NodeList.html\">NodeList</a> of elements used on the\nRating. Each element is one Star."
      },
      "hiddenInput": {
       "!type": "+aui_node.Node",
       "!doc": "Hidden input to handle the selected value. This hidden input\nreplace the radio elements and keep the same name."
      },
      "inputName": {
       "!type": "string",
       "!doc": "Name of the <a\nhref=\"Rating.html#config_hiddenInput\">hiddenInput</a> element. If\nnot specified will use the name of the replaced radio."
      },
      "label": {
       "!type": "string",
       "!doc": "Label to be displayed with the Rating elements."
      },
      "labelNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the StarRating. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-rating-label-element</code>."
      },
      "selectedIndex": {
       "!type": "number",
       "!doc": "Stores the index of the selected element."
      },
      "showTitle": {
       "!type": "bool",
       "!doc": "If <code>true</code> will extract the value of the\n<code>title</code> attribute on the radio, and use it on the\ngenerated Rating elements."
      },
      "size": {
       "!type": "number",
       "!doc": "Number of Rating elements to be displayed."
      },
      "title": {
       "!type": "string",
       "!doc": "If set, will be used when there is no DOM <code>title</code> on the\nradio elements."
      },
      "value": {
       "!type": "string",
       "!doc": "Stores the value of the current selected Rating element."
      },
      "clearSelection": {
       "!type": "fn()",
       "!doc": "Clear all selected starts to the default state."
      },
      "select": {
       "!type": "fn(index: number)",
       "!doc": "Selects the <code>index</code> Rating element."
      },
      "fillTo": {
       "!type": "fn(index: number, className: string)",
       "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
      },
      "indexOf": {
       "!type": "fn(elem: +_yui.aui_node.Node) -> number",
       "!doc": "Finds the index of the <code>elem</code>."
      }
     },
     "Rating.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Rating.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Rating."
     },
     "StarRating.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    },
    "ThumbRating": {
     "!type": "fn(config: +Object) -> +_yui.aui_rating.ThumbRating",
     "prototype": {
      "!proto": "_yui.aui_rating.Rating.prototype",
      "size": {
       "!type": "number",
       "!doc": "The size on ThumbRating is always 2 (i.e., thumb up and thumb down)."
      },
      "fillTo": {
       "!type": "fn(index: number, className: string)",
       "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
      }
     },
     "ThumbRating.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ThumbRating.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ThumbRating."
     }
    }
   },
   "aui_resize": {
    "Resize": {
     "!type": "fn(config: +Object) -> +_yui.aui_resize.Resize",
     "prototype": {
      "!proto": "Base.prototype",
      "autoHide": {
       "!type": "bool",
       "!doc": "False to ensure that the resize handles are always visible, true to\ndisplay them only when the user mouses over the resizable borders."
      },
      "handles": {
       "!type": "+Array",
       "!doc": "The handles to use (any combination of): t, b, r, l, bl,\nbr, tl, tr. Can use a shortcut of All."
      },
      "node": {
       "!type": "+aui_node.Node",
       "!doc": "The selector or element to resize. Required."
      },
      "proxy": {
       "!type": "bool",
       "!doc": "Resize a proxy element instead of the real element."
      },
      "proxyEl": {
       "!type": "string",
       "!doc": "The Resize proxy element."
      },
      "resizing": {
       "!type": "bool",
       "!doc": "True when the element is being Resized."
      },
      "wrap": {
       "!type": "bool",
       "!doc": "True to wrap an element with a div if needed (required for textareas\nand images, defaults to false) in favor of the handles config option.\nThe wrapper element type (default div) could be over-riden passing the\n<code>wrapper</code> attribute."
      },
      "wrapTypes": {
       "!type": "+Regex",
       "!doc": "Elements that requires a wrapper by default. Normally are elements\nwhich cannot have children elements."
      },
      "wrapper": {
       "!type": "string",
       "!doc": "Element to wrap the <code>wrapTypes</code>. This element will house\nthe handles elements."
      },
      "changeHeightHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the height."
      },
      "changeLeftHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the left."
      },
      "changeTopHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the top."
      },
      "changeWidthHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the width."
      },
      "delegate": {
       "!type": "+Object",
       "!doc": "Store DD.Delegate reference for the respective Resize instance."
      },
      "eachHandle": {
       "!type": "fn(fn: fn())",
       "!doc": "<p>Loop through each handle which is being used and executes a callback.</p>\n<p>Example:</p>\n<pre><code>instance.eachHandle(\n     function(handleName, index) { ... }\n );</code></pre>"
      }
     },
     "Resize.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Resize.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Resize."
     }
    }
   },
   "aui_textboxlist": {
    "Textboxlist": {
     "!type": "fn(config: +Object) -> +_yui.aui_textboxlist.Textboxlist",
     "prototype": {
      "!proto": "_yui.aui_autocomplete.AutoComplete.prototype",
      "constrain": {
       "!type": "string",
       "!doc": "Will attempt to constrain the resize node to the boundaries. Arguments:<br>\nview: Contrain to Viewport<br>\n#selector_string: Constrain to this node<br>\n{Region Object}: An Object Literal containing a valid region (top, right, bottom, left) of page positions"
      },
      "minHeight": {
       "!type": "number",
       "!doc": "The minimum height of the element"
      },
      "minWidth": {
       "!type": "number",
       "!doc": "The minimum width of the element"
      },
      "maxHeight": {
       "!type": "number",
       "!doc": "The maximum height of the element"
      },
      "maxWidth": {
       "!type": "number",
       "!doc": "The maximum width of the element"
      },
      "preserveRatio": {
       "!type": "bool",
       "!doc": "Maintain the elements ratio when resizing."
      },
      "tickX": {
       "!type": "number",
       "!doc": "The number of x ticks to span the resize to."
      },
      "tickY": {
       "!type": "number",
       "!doc": "The number of y ticks to span the resize to."
      },
      "constrainBorderInfo": {
       "!type": "+Object",
       "!doc": "Cache the border widths of the contrain node if constrain\noption is being used."
      },
      "navigationDateFormatter": {
       "!type": "fn()",
       "!doc": "The function to format the navigation header date."
      },
      "firstDayOfWeek": {
       "!type": "number",
       "!doc": "First day of the week: Sunday is 0, Monday is 1."
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "Mapping UTF-8 groups of characters. Based on Steven Levithans XRegExp\nproject (http://xregexp.com)"
      },
      "match": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!doc": "Tests a string against an Unicode pattern. Returns the first match."
      },
      "test": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!doc": "Tests a string against an Unicode pattern. Returns true or false."
      }
     },
     "Textboxlist.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Textboxlist.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Textboxlist."
     }
    }
   },
   "aui_toolbar": {
    "Toolbar": {
     "!type": "fn(config: +Object) -> +_yui.aui_toolbar.Toolbar",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "activeState": {
       "!type": "bool",
       "!doc": "Receives an interaction state of active when the user clicks on it."
      },
      "children": {
       "!type": "+Array",
       "!doc": "Receives the toolbar items."
      },
      "defaultState": {
       "!type": "bool",
       "!doc": "Receives a default interaction state."
      },
      "hoverState": {
       "!type": "bool",
       "!doc": "Receives an interaction state of hover during the\n<code>mouseover</code> event."
      },
      "defaultChildType": {
       "!type": "string",
       "!doc": "The default type of child widget to render into the Element"
      },
      "orientation": {
       "!type": "string",
       "!doc": "Representing the orientation of the progress bar. Could be\n<code>horizontal</code> or <code>vertical</code>."
      }
     }
    }
   },
   "aui_tooltip": {
    "Tooltip": {
     "!type": "fn(config: +Object) -> +_yui.aui_tooltip.Tooltip",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContextPanel.prototype",
      "anim": {
       "!type": "+Object",
       "!doc": "See <a href=\"OverlayContextPanel.html#config_anim\">OverlayContextPanel anim</a>."
      },
      "align": {
       "!type": "+Object",
       "!doc": "See <a href=\"Overlay.html#config_align\">OverlayContextPanel align</a>."
      },
      "showOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "Prevents display:none from being applied to the tooltip when it is hidden because we\ncannot properly align a hidden tooltip with display:none since we cant accurately\nget its computed x and y position."
      },
      "hideDelay": {
       "!type": "number",
       "!doc": "See <a href=\"OverlayContext.html#config_hideDelay\">OverlayContext hideDelay</a>."
      },
      "title": {
       "!type": "bool",
       "!doc": "Use the content of the <code>title</code> attribute as the Tooltip\ncontent."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Over-ride the <code>show</code> to invoke the\n<a href=\"Tooltip.html#method__loadBodyContentFromTitle\">_loadBodyContentFromTitle</a>.\nSee <a href=\"OverlayContext.html#config_show\">OverlayContext show</a>."
      }
     },
     "Tooltip.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Tooltip.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Tooltip."
     }
    }
   },
   "aui_tree": {
    "TreeData": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeData",
     "prototype": {
      "!proto": "Base.prototype",
      "container": {
       "!type": "+aui_node.Node",
       "!doc": "Container to nest children nodes. If has cntainer its not a leaf."
      },
      "children": {
       "!type": "+Array",
       "!doc": "Array of children (i.e. could be a JSON metadata object or a TreeNode instance)."
      },
      "index": {
       "!type": "+Object",
       "!doc": "Index the nodes."
      },
      "getNodeById": {
       "!type": "fn(uid: string) -> +aui_tree.TreeNode",
       "!doc": "Get a TreeNode by id."
      },
      "isRegistered": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode) -> bool",
       "!doc": "Whether the TreeNode is registered on this TreeData."
      },
      "updateReferences": {
       "!type": "fn(TreeNode: +_yui.aui_node.Node, TreeNode: +ParentNode, TreeView: +OwnerTree)",
       "!doc": "Update the references of the passed TreeNode."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!doc": "Refresh the index (i.e. re-index all nodes)."
      },
      "registerNode": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode)",
       "!doc": "Register the passed TreeNode on this TreeData."
      },
      "updateIndex": {
       "!type": "fn(index: +Object)",
       "!doc": "Update the <a href=\"TreeData.html#config_index\">index</a> attribute value."
      },
      "unregisterNode": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode)",
       "!doc": "Unregister the passed TreeNode from this TreeData."
      },
      "collapseAll": {
       "!type": "fn()",
       "!doc": "Collapse all children of the TreeData."
      },
      "expandAll": {
       "!type": "fn()",
       "!doc": "Expand all children of the TreeData."
      },
      "selectAll": {
       "!type": "fn()",
       "!doc": "Select all children of the TreeData."
      },
      "unselectAll": {
       "!type": "fn()",
       "!doc": "Unselect all children of the TreeData."
      },
      "eachChildren": {
       "!type": "fn(fn: fn(), fn: bool)",
       "!doc": "Loop each children and execute the <code>fn</code> callback."
      },
      "eachParent": {
       "!type": "fn(fn: fn())",
       "!doc": "Loop each parent node and execute the <code>fn</code> callback."
      },
      "bubbleEvent": {
       "!type": "fn(eventType: string, args: +Array, cancelBubbling: bool, stopActionPropagation: bool)",
       "!doc": "Bubble event to all parent nodes."
      },
      "createNode": {
       "!type": "fn(options: +Object) -> +aui_tree.TreeNode",
       "!doc": "Create a TreeNode instance."
      },
      "appendChild": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode, cancelBubbling: bool)",
       "!doc": "Append a child node to the TreeData."
      },
      "item": {
       "!type": "fn(index: number) -> +aui_tree.TreeNode",
       "!doc": "Get a TreeNode children by index."
      },
      "indexOf": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode) -> number",
       "!doc": "Index of the passed TreeNode on the <a\nhref=\"TreeData.html#config_children\">children</a> attribute."
      },
      "hasChildNodes": {
       "!type": "fn() -> bool",
       "!doc": "Whether the TreeData contains children or not."
      },
      "getChildren": {
       "!type": "fn(deep: bool) -> +Array",
       "!doc": "Get an Array of the children nodes of the current TreeData."
      },
      "getEventOutputMap": {
       "!type": "fn(node: +_yui.aui_tree.TreeData) -> +Object",
       "!doc": "Get an object containing metadata for the custom events."
      },
      "removeChild": {
       "!type": "fn(node: +_yui.aui_tree.TreeData)",
       "!doc": "Remove the passed <code>node</code> from the current TreeData."
      },
      "_removeChild": {
       "!type": "fn(node: +_yui.aui_tree.TreeData)",
       "!doc": "Remove the passed <code>node</code> from the current TreeData."
      },
      "empty": {
       "!type": "fn()",
       "!doc": "Delete all children of the current TreeData."
      },
      "insert": {
       "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode, where: +_yui.aui_tree.TreeNode)",
       "!doc": "Insert <code>treeNode</code> before or after the <code>refTreeNode</code>."
      },
      "insertAfter": {
       "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode)",
       "!doc": "Insert <code>treeNode</code> after the <code>refTreeNode</code>."
      },
      "insertBefore": {
       "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode)",
       "!doc": "Insert <code>treeNode</code> before the <code>refTreeNode</code>."
      },
      "getNodeByChild": {
       "!type": "fn(child: +_yui.aui_node.Node) -> +aui_tree.TreeNode",
       "!doc": "Get a TreeNode instance by a child DOM Node."
      }
     }
    },
    "TreeNode": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeNode",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeData.prototype",
      "io": {
       "!type": "+Object",
       "!doc": "IO options for the current TreeNode load the children."
      },
      "createNodes": {
       "!type": "fn(nodes: ?)",
       "!doc": "Create nodes."
      },
      "initIO": {
       "!type": "fn()",
       "!doc": "Initialize the IO transaction setup on the <a\nhref=\"TreeNode.html#config_io\">io</a> attribute."
      },
      "ioStartHandler": {
       "!type": "fn()",
       "!doc": "IO Start handler."
      },
      "ioCompleteHandler": {
       "!type": "fn()",
       "!doc": "IO Complete handler."
      },
      "ioSuccessHandler": {
       "!type": "fn()",
       "!doc": "IO Success handler."
      },
      "ioFailureHandler": {
       "!type": "fn()",
       "!doc": "IO Failure handler."
      },
      "alwaysShowHitArea": {
       "!type": "bool",
       "!doc": "Always show the hitarea icon."
      },
      "draggable": {
       "!type": "bool",
       "!doc": "If true the TreeNode is draggable."
      },
      "expanded": {
       "!type": "bool",
       "!doc": "Whether the TreeNode is expanded by default."
      },
      "hitAreaEl": {
       "!type": "+aui_node.Node",
       "!doc": "Hitarea element."
      },
      "iconEl": {
       "!type": "+aui_node.Node",
       "!doc": "Icon element."
      },
      "id": {
       "!type": "string",
       "!doc": "Id of the TreeNode."
      },
      "label": {
       "!type": "string",
       "!doc": "Label of the TreeNode."
      },
      "labelEl": {
       "!type": "+aui_node.Node",
       "!doc": "Label element to house the <code>label</code> attribute."
      },
      "leaf": {
       "!type": "bool",
       "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf)."
      },
      "nextSibling": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Next sibling of the current TreeNode."
      },
      "ownerTree": {
       "!type": "+aui_tree.TreeView",
       "!doc": "TreeView which contains the current TreeNode."
      },
      "parentNode": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Parent node of the current TreeNode."
      },
      "prevSibling": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Previous sibling of the current TreeNode."
      },
      "collapse": {
       "!type": "fn()",
       "!doc": "Collapse the current TreeNode."
      },
      "contains": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode) -> bool",
       "!doc": "Check if the current TreeNode contains the passed <code>node</code>."
      },
      "expand": {
       "!type": "fn()",
       "!doc": "Expand the current TreeNode."
      },
      "getDepth": {
       "!type": "fn() -> number",
       "!doc": "Get the depth of the current TreeNode."
      },
      "isLeaf": {
       "!type": "fn() -> bool",
       "!doc": "Whether the current TreeNode is a leaf or not."
      },
      "isSelected": {
       "!type": "fn() -> bool",
       "!doc": "Whether the current TreeNode is selected or not."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Toggle the current TreeNode, <code>collapsed</code> or <code>expanded</code>."
      },
      "A.TreeNode.nodeTypes": {
       "!type": "+Object",
       "!doc": "TreeNode types hash map.\n\n<pre><code>A.TreeNode.nodeTypes = {\n check: A.TreeNodeCheck,\n io: A.TreeNodeIO,\n node: A.TreeNode,\n radio: A.TreeNodeRadio,\n task: A.TreeNodeTask\n};</code></pre>"
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeIO": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeNodeIO",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNode.prototype",
      "cache": {
       "!type": "bool",
       "!doc": "Whether the current TreeNode should cache the loaded content or not."
      },
      "loaded": {
       "!type": "bool",
       "!doc": "Whether the current TreeNode has loaded the content."
      },
      "loading": {
       "!type": "bool",
       "!doc": "Whether the current TreeNode IO transaction is loading."
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeCheck": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeNodeCheck",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNodeIO.prototype",
      "checked": {
       "!type": "bool",
       "!doc": "Whether the TreeNode is checked or not."
      },
      "checkContainerEl": {
       "!type": "+aui_node.Node",
       "!doc": "Container element for the checkbox."
      },
      "checkEl": {
       "!type": "+aui_node.Node",
       "!doc": "Checkbox element."
      },
      "checkName": {
       "!type": "string",
       "!doc": "Name of the checkbox element used on the current TreeNode."
      },
      "check": {
       "!type": "fn()",
       "!doc": "Check the current TreeNode."
      },
      "toggleCheck": {
       "!type": "fn()",
       "!doc": "Toggle the check status of the current TreeNode."
      },
      "uncheck": {
       "!type": "fn()",
       "!doc": "Uncheck the current TreeNode."
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeTask": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeNodeTask",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNodeCheck.prototype"
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "TreeNodeRadio": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeNodeRadio",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNodeTask.prototype"
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "TreeView": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeView",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeData.prototype",
      "type": {
       "!type": "string",
       "!doc": "Type of the treeview (i.e. could be file or normal)."
      },
      "lastSelected": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Last selected TreeNode."
      }
     },
     "TreeView.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeView.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView."
     }
    },
    "TreeViewDD": {
     "!type": "fn(config: +Object) -> +_yui.aui_tree.TreeViewDD",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeView.prototype",
      "helper": {
       "!type": "+aui_node.Node",
       "!doc": "Dragdrop helper element."
      },
      "scrollDelay": {
       "!type": "number",
       "!doc": "Delay of the scroll while dragging the TreeNodes."
      },
      "dropAction": {
       "!type": "string",
       "!doc": "Drop action (i.e. could be append, below or above)."
      },
      "lastY": {
       "!type": "number",
       "!doc": "Last Y."
      },
      "nodeContent": {
       "!type": "+aui_node.Node",
       "!doc": "Reference for the current drop node."
      }
     },
     "TreeViewDD.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeViewDD.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewDD."
     }
    }
   }
  }
 },
 "AUI": "fn() -> +yui.YUI"
};
    
})