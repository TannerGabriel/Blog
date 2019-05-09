package com.example.camerax

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.os.Environment
import android.util.Log
import android.util.Rational
import android.util.Size
import android.view.TextureView
import androidx.camera.core.*
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.lifecycle.LifecycleOwner
import kotlinx.android.synthetic.main.activity_main.*
import java.io.File

private const val REQUEST_CODE_PERMISSIONS = 10

val permissions = arrayOf(android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE, android.Manifest.permission.READ_EXTERNAL_STORAGE)

class MainActivity : AppCompatActivity() {

    val filename = "test.png"
    val sd = Environment.getExternalStorageDirectory()
    val dest = File(sd, filename)
    private var lensFacing = CameraX.LensFacing.BACK
    private var imageCapture: ImageCapture? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        bindCamera()

        fab_camera.setOnClickListener {
            imageCapture?.takePicture(dest,
                object : ImageCapture.OnImageSavedListener {
                    override fun onError(error: ImageCapture.UseCaseError,
                                         message: String, exc: Throwable?) {
                        Log.e("Image", error.toString())
                        println("Error: $error")
                    }
                    override fun onImageSaved(file: File) {
                        Log.v("Image", "Successfully saved image")
                        println("Successfully saved image")
                    }
                })
        }

        fab_flash.setOnClickListener {
            val flashMode = imageCapture?.flashMode
            if(flashMode == FlashMode.ON) imageCapture?.flashMode = FlashMode.OFF
            else imageCapture?.flashMode = FlashMode.ON
        }

        fab_switch_camera.setOnClickListener {
            lensFacing = if (CameraX.LensFacing.FRONT == lensFacing) {
                CameraX.LensFacing.BACK
            } else {
                CameraX.LensFacing.FRONT
            }
            bindCamera()
        }
    }

    private fun hasNoPermissions(): Boolean{
        return ContextCompat.checkSelfPermission(this,
            Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED || ContextCompat.checkSelfPermission(this,
            Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED || ContextCompat.checkSelfPermission(this,
            Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED
    }

    fun requestPermission(){
        ActivityCompat.requestPermissions(this, permissions,0)
    }

    private fun bindCamera(){
        CameraX.unbindAll()

        val previewConfig = PreviewConfig.Builder()
            .setLensFacing(lensFacing)

        val preview = Preview(previewConfig.build())

        var imageCaptureConfig = ImageCaptureConfig.Builder()
            .setTargetRotation(windowManager.defaultDisplay.rotation)
            .setLensFacing(lensFacing)
            .setFlashMode(FlashMode.ON)

        imageCapture = ImageCapture(imageCaptureConfig.build())

        val textureView: TextureView = findViewById(R.id.view_finder)

        // The output data-handling is configured in a listener.
        preview.setOnPreviewOutputUpdateListener { previewOutput ->
            textureView.surfaceTexture = previewOutput.surfaceTexture
        }


        // The use case is bound to an Android Lifecycle with the following code.
        CameraX.bindToLifecycle(this as LifecycleOwner, imageCapture, preview)
    }

    override fun onStart() {
        super.onStart()

        if (hasNoPermissions()) {
            requestPermission()
        }
    }

}
