import React, { useRef, useState } from 'react';
import {
  Row,
  Col,
  InputGroup,
  Checkbox,
  Select,
  Toastr,
  Button,
  Card,
  CardBody,
  SelectOption,
  ToastrRef,
  ToastrProps,
} from 'oah-ui';

export default function ToastrPage() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState('HI there!');
  const [message, setMessage] = useState('cool toaster');

  const [data, setData] = useState<ToastrProps>({
    position: 'topEnd',
    status: 'Primary',
    duration: 2000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false,
  });

  const toastrRef = useRef<ToastrRef>(null);

  const showToastr = () => {
    setCount(count + 1);
    toastrRef.current?.add(message, title + count, { ...data });
  };

  const onChangeHandle = (name: keyof ToastrProps, value: any) => {
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const positionOptions: SelectOption[] = [
    { value: 'topRight', label: 'Top-Right' },
    { value: 'topLeft', label: 'Top-Left' },
    { value: 'bottomRight', label: 'Bottom-Right' },
    { value: 'bottomLeft', label: 'Bottom-Left' },
    { value: 'topStart', label: 'Top-Start' },
    { value: 'topEnd', label: 'Top-End' },
    { value: 'bottomStart', label: 'Bottom-Start' },
    { value: 'bottomEnd', label: 'Bottom-End' },
  ];
  const statusOption: SelectOption[] = [
    { value: 'Info', label: 'Info' },
    { value: 'Success', label: 'Success' },
    { value: 'Danger', label: 'Danger' },
    { value: 'Primary', label: 'Primary' },
    { value: 'Warning', label: 'Warning' },
    { value: 'Default', label: 'Default' },
  ];

  return (
    <Row>
      <Col breakPoint={{ xs: 12 }}>
        <Toastr ref={toastrRef} />
        <Card>
          <header>Toaster configuration</header>
          <CardBody>
            <Row>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <Select
                  style={{ marginBottom: '1rem' }}
                  fullWidth
                  placeholder="Place to show toast"
                  options={positionOptions}
                  value={data.position}
                  onChange={v => onChangeHandle('position', v)}
                />
                <InputGroup fullWidth label="Title">
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </InputGroup>
                <InputGroup fullWidth label="Message">
                  <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                </InputGroup>
                <InputGroup fullWidth label="Time to hide toast, ms. 0 to persistent toast">
                  <input
                    type="number"
                    value={data.duration}
                    onChange={e => onChangeHandle('duration', e.target.valueAsNumber)}
                  />
                </InputGroup>
              </Col>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <Select
                  style={{ marginBottom: '1rem' }}
                  fullWidth
                  placeholder="Toast Status"
                  options={statusOption}
                  value={data.status}
                  onChange={v => onChangeHandle('status', v)}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Checkbox checked={data.destroyByClick} onChange={v => onChangeHandle('destroyByClick', v)}>
                    Hide on click
                  </Checkbox>
                  <Checkbox checked={data.preventDuplicates} onChange={v => onChangeHandle('preventDuplicates', v)}>
                    Prevent arising of duplicate toast
                  </Checkbox>
                  <Checkbox checked={data.hasIcon} onChange={v => onChangeHandle('hasIcon', v)}>
                    Show toast with icon
                  </Checkbox>
                </div>
              </Col>
            </Row>
          </CardBody>
          <footer>
            <Button onClick={showToastr}>Show Toastr</Button>
          </footer>
        </Card>
      </Col>
    </Row>
  );
}
