function formatCategory(type) {
  switch (type) {
    case 1:
      return "react课程";
    case 2:
      return "vue课程";
  }
}

test('test common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test object', () => {
  expect({name: 'zhangsan'}).toEqual({name: 'zhangsan'})
})

test('test formatCategory function', () => {
  expect(formatCategory(1)).toBe('react课程')
})