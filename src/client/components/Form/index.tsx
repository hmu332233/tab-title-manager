import React from 'react';

type Props = {
  onSubmit: ({ url, title }: { url: string, title: string }) => void,
};

function Form({
  onSubmit,
}: Props) {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const { url, title } = Object.fromEntries(formData);

    try {
      const { origin, pathname } = new URL(url as string);

      onSubmit({
        url: `${origin}${pathname}`,
        title: title as string,
      });

      formElement.reset();
    } catch (err) {
      if (err.name === 'TypeError') {
        // TODO: alert 대신 message 컴포넌트 형식으로 변경하기
        alert('URL 형식이 잘 못 되었습니다.\nhttps://naver.com/learn/my와 같은 형식으로 적어주세요.');
      }
    }

  };
  return (
    <section className="section is-flex-direction-column is-max-desktop">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">URL</label>
          <div className="control">
            <input className="input" type="text" name="url" placeholder="https://naver.com/learn/my" />
          </div>
        </div>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" name="title" placeholder="제목" />
          </div>
        </div>
        <button className="button is-primary is-fullwidth" type="submit">추가</button>
      </form>
    </section>
  );
}

export default Form;
