import renderHtml from './renderHtml'

test("SSR", () => {
  const rendered = renderHtml({}, "<html></html>", {}, {}, {});
  expect(rendered).toContain('<html>');
});
