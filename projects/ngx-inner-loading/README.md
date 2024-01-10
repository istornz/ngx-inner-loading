# NgxInnerLoading

A simple Angular wrapper working with **Bootstrap** to show dynamically **empty** 🙈, **error** ⛔️ or **loading** 🦥 screen.

## 🧐 What is it ?

This library help you displaying **multiple** screens when you are trying to load data:
- **Loading** screen ➡️ when loading data.
- **Empty** screen ➡️ when no data was returned.
- **Error** screen ➡️ when the loading process fail.

All components are fully **customizables**, you can **easily change** description, display retry button...

## 🗃 How to install ?

- Import **Bootstrap CSS** in your Angular project:
  - Using [**ngx-bootstrap**](https://valor-software.com/ngx-bootstrap/#/) (**recommended**).
  - Manually by adding this line to your ```index.html``` file
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
```

- Import **Bootstrap Icons CSS** in your Angular project:
  - Using [**bootstrap-icons**](https://stackoverflow.com/a/65440311/5078902) (**recommended**).
  - Manually by adding this line to your ```index.html``` file (below bootstrap CSS import if manually imported too).
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
```

- Install the package

```shell
npm i ngx-inner-loading --save
```

## 🎯 How it works ?

- Import the **NgxInnerLoading** module

```typescript
@NgModule({
  imports: [
    NgxInnerLoadingModule
  ]
})
```

- Create in your ```component.ts``` state variables:
```typescript
protected loading = false;
protected error = false;
protected data?: string[];
```

- In your ```component.html``` use NgxInnerLoading like this:

```html
@if(!error && !loading && data && data.length > 0) {
  <h2>Data loaded !</h2>
} @else {
  <ngx-inner-loading [empty]="data?.length == 0" [error]="error"
    [loading]="loading" (retry)="retry()">
  </ngx-inner-loading>
}
```

## 📸 How it looks ?

### Error screen

![error](https://s10.gifyu.com/images/Capture-decran-2022-02-22-a-11.17.36.png)

### Loading screen

![loading](https://s10.gifyu.com/images/Capture-decran-2022-02-22-a-11.20.18.png)

### Empty screen

![empty](https://s10.gifyu.com/images/Capture-decran-2022-02-22-a-11.17.59.png)
