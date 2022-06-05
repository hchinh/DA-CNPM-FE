import { Form, Image, Input } from 'antd';
import { get } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { FormContextCustom } from '../../context/FormContextCustom';

export const getBase64StringFromDataURL = (dataURL: string | null) => {
  if (dataURL) {
    return dataURL.replace('data:', '').replace(/^.+,/, '');
  }

  return null;
};

interface Props {
  name: string;
}

const FormUploadImage = ({ name }: Props) => {
  const { record, form } = useContext(FormContextCustom);

  const [base64Url, setBase64Url] = useState(
    record ? `data:image/jpeg;base64,${get(record, name)}` : null
  );

  useEffect(() => {
    form.setFields([
      {
        name: name,
        value: getBase64StringFromDataURL(base64Url),
      },
    ]);
  }, [base64Url]); // eslint-disable-line

  const getBase64 = (file: any) => {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const handleFileInputChange = (e: any) => {
    getBase64(e.target.files[0]).then((result) => {
      setBase64Url(result as string);
    });
  };

  return (
    <>
      <Form.Item name={name} noStyle />
      <Input className='mt-10 pointer' type='file' onChange={handleFileInputChange} />
      {base64Url && (
        <div className='flex-center mt-24'>
          <Image
            src={base64Url}
            alt='image'
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '10px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      )}
    </>
  );
};

export default FormUploadImage;
