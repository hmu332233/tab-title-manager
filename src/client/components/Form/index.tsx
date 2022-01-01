import React, { useRef } from 'react';

type Props = {
  onSubmit: ({ url, title }: { url: string, title: string }) => void,
  onUrlButtonClick: (callback: ({ url, title }: { url: string, title: string }) => void) => void,
};

function Form({
  onSubmit,
  onUrlButtonClick,
}: Props) {
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const urlInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleUrlButtonClick = () => {
    // NOTE: uncontrolled form 관점에서 데이터를 전달하여 form을 갱신하기 위한 다른 방법을 찾아보기
    onUrlButtonClick(({ url, title }) => {
      titleInputRef.current && (titleInputRef.current.value = title);
      urlInputRef.current && (urlInputRef.current.value = url);
    });
  };

  return (
    <section className="section is-flex-direction-column is-max-desktop">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" name="title" placeholder="제목" ref={titleInputRef} />
          </div>
        </div>
        <div className="field mb-4">
          <label className="label">URL</label>
          <div className="control">
            <input className="input" type="text" name="url" placeholder="https://naver.com/learn/my" ref={urlInputRef} />
          </div>
        </div>
        <button className="button is-primary is-fullwidth is-outlined mb-2" type="button" onClick={handleUrlButtonClick}>현재 페이지 정보 불러오기</button>
        <button className="button is-primary is-fullwidth" type="submit">변경하기</button>
      </form>
    </section>
  );
}

export default Form;
