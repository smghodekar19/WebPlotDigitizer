/*
	WebPlotDigitizer - https://automeris.io/WebPlotDigitizer

	Copyright 2010-2018 Ankit Rohatgi <ankitrohatgi@hotmail.com>

	This file is part of WebPlotDigitizer.

    WebPlotDIgitizer is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebPlotDigitizer is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with WebPlotDigitizer.  If not, see <http://www.gnu.org/licenses/>.

*/

var wpd = wpd || {};

wpd.imageEditing = {
    showImageInfo: function() {        
        let $imageDimensions = document.getElementById("image-info-dimensions");
        let imageInfo = wpd.imageManager.getImageInfo();
        $imageDimensions.innerHTML = "(" + imageInfo.width + "x" + imageInfo.height + ")";
        wpd.popup.show('image-info-popup');
    },

    startImageCrop: function() {
        wpd.graphicsWidget.setTool(new wpd.CropTool());
    },

    startPerspective: function() {
        wpd.popup.show('perspective-info');
    },

    startPerspectiveConfirmed: function() {
        
    },

    undo: function() {
        wpd.appData.getUndoManager().undo();
    },

    redo: function() {
        wpd.appData.getUndoManager().redo();
    }
};

wpd.ReversibleAction = class {
    constructor() {
    }
    execute() {
    }
    undo() {
    }
};

wpd.CropImageAction = class extends wpd.ReversibleAction {
    constructor(x0, y0, x1, y1) {
        super();
        this._x0 = x0;
        this._y0 = y0;
        this._x1 = x1;
        this._y1 = y1;
    }

    execute() {
        // store current image for undo

        // crop image

        // replace current image with cropped image

        // call all dependent UI actions
        console.log("crop action called!");
    }

    undo() {
        // set the saved image

        // call all dependent UI elements
    }
};
