import init, { TOOL_NAMES } from './init.js';

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive'
};

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'ohif-segmentation-extension',

  preRegistration(configuration = {}) {
    init(configuration);
  },

  /**
   * Registers one or more named commands scoped to a context. Commands are
   * the primary means for...
   */
  getCommandsModule() {
    return {
      defaultContext: 'VIEWER',
      actions: [],
      definitions: []
    };
  },

  /**
   * Allows you to provide toolbar definitions that will be merged with any
   * existing application toolbar configuration. Used to determine which
   * buttons should be visible when, their order, what happens when they're
   * clicked, etc.
   */
  getToolbarModule() {
    return {
      definitions: [
        {
          id: 'freehandRoiTools',
          label: 'ROI',
          icon: 'level',
          buttons: [
            {
              id: 'FreehandRoi',
              label: 'Draw',
              icon: 'level',
              type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
              commandName: 'setToolActive',
              commandOptions: { toolName: TOOL_NAMES.FREEHAND_ROI_3D_TOOL }
            },
            {
              id: 'FreehandRoiSculptor',
              label: 'Sculpt',
              icon: 'level',
              type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
              commandName: 'setToolActive',
              commandOptions: { toolName: TOOL_NAMES.FREEHAND_ROI_3D_SCULPTOR_TOOL }
            }
          ]
        },
        {
          id: 'brushTools',
          label: 'Segment',
          icon: 'level',
          buttons: [
            {
              id: 'Brush',
              label: 'Manual',
              icon: 'level',
              type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
              commandName: 'setToolActive',
              commandOptions: { toolName: TOOL_NAMES.BRUSH_3D_TOOL }
            },
            {
              id: 'Brush3DHUGatedTool',
              label: 'Smart CT',
              icon: 'level',
              type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
              commandName: 'setToolActive',
              commandOptions: { toolName: TOOL_NAMES.BRUSH_3D_HU_GATED_TOOL }
            },
            {
              id: 'Brush3DAutoGatedTool',
              label: 'Auto',
              icon: 'level',
              type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
              commandName: 'setToolActive',
              commandOptions: { toolName: TOOL_NAMES.BRUSH_3D_AUTO_GATED_TOOL }
            }
          ]
        }
      ],
      defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE'
    };
  },

  /**
   * Not yet implemented
   */
  getPanelModule: () => null
};
