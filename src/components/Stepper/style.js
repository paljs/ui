/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from '../../theme/styled-components';

const StepperStyle = styled.div`
  ${({ theme }) => css`
    &.horizontal {
      .header .step {
        width: ${theme.stepperIndexSize};
        margin: 0 ${theme.stepperIndexSize} / 2;
        flex-direction: column;
      }

      .header .connector {
        margin-top: ${theme.stepperIndexSize} / 2;
        height: 2px;
      }
    }

    &.vertical {
      display: flex;
      height: 100%;
      .header {
        flex-direction: column;

        .label {
          margin: 0 10px;
        }

        .connector {
          width: 2px;
          margin: ${theme.stepperIndexSize} / 2;
        }
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
      .connector {
        background-color: ${theme.stepperFg};
        flex: auto;
      }

      .connector-past {
        background-color: ${theme.stepperAccentColor};
      }

      .label {
        font-size: ${theme.stepperLabelFontSize};
        font-weight: ${theme.stepperLabelFontWeight};
        color: ${theme.stepperFg};
        width: max-content;
      }

      .label-index {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${theme.stepperIndexSize};
        height: ${theme.stepperIndexSize};
        border-radius: ${theme.stepperIndexSize} / 2;
        border: 2px solid ${theme.stepperFg};
        color: ${theme.stepperFg};
        font-weight: ${theme.stepperLabelFontWeight};

        .icon {
          font-size: ${theme.stepperCompletedIconSize};
          font-weight: ${theme.stepperCompletedIconWeight};
        }
      }

      .step {
        display: flex;
        align-items: center;
        cursor: pointer;
        &.selected {
          .label-index {
            border: 2px solid ${theme.stepperAccentColor};
            color: ${theme.stepperAccentColor};
          }
          .label {
            color: ${theme.stepperAccentColor};
          }
        }

        &.completed {
          .label-index {
            background-color: ${theme.stepperAccentColor};
            border: 2px solid ${theme.stepperAccentColor};
            color: ${theme.stepperCompletedFg};
          }
          .label {
            color: ${theme.stepperAccentColor};
          }
        }
      }
    }

    .step-content {
      padding: ${theme.stepperStepPadding};
    }
  `}
`;
