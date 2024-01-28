import { BaseDashboard } from "@microsoft/teamsfx-react";
import { Dropdown } from '@fluentui/react/lib/Dropdown';

import ChartWidget from "../widgets/ChartWidget";
import ListWidget from "../widgets/ListWidget";
import { Stack } from "@fluentui/react";

export default class SampleDashboard extends BaseDashboard<any, any> {
  private dropdownOptions = [
    { key: 'option1', text: 'Option 1' },
    { key: 'option2', text: 'Option 2' },
    { key: 'option3', text: 'Option 3' },
    // Add more options as needed
  ];

  override layout(): JSX.Element | undefined {
    return (
      <Stack>
        <Dropdown
          label="Choose an option:"
          placeholder="Select an option"
          options={this.dropdownOptions}
          styles={{ root: { width: 300 } }}
        />
        <Stack tokens={{ childrenGap: 20 }} styles={{ root: { width: '100%' } }}>
          <ListWidget />
          <ChartWidget />
        </Stack>
      </Stack>
    );
  }
}
